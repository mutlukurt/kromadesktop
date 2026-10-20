// Smoke test for an installed Kroma build: drives the running app over the DevTools protocol,
// visits the main pages, saves a screenshot of each and fails on uncaught errors or empty pages.
import fs from 'node:fs';

const port = process.env.KROMA_DEBUG_PORT || '9333';
const outDir = process.argv[2] || 'smoke-out';
fs.mkdirSync(outDir, { recursive: true });

async function waitForPage() {
  for (let i = 0; i < 90; i++) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
      const page = targets.find((t) => t.type === 'page');
      if (page) return page;
    } catch {}
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error('The app window never appeared on the debugging port');
}

const page = await waitForPage();
const ws = new WebSocket(page.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
const exceptions = [];
const consoleErrors = [];
const failedRequests = [];
const urls = new Map();
ws.onmessage = (event) => {
  const m = JSON.parse(event.data);
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m);
    pending.delete(m.id);
  }
  if (m.method === 'Runtime.exceptionThrown') {
    const d = m.params.exceptionDetails;
    exceptions.push((d.exception?.description || d.text || '').slice(0, 300));
  }
  if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') {
    consoleErrors.push(m.params.args.map((a) => a.value ?? a.description ?? '').join(' ').slice(0, 300));
  }
  if (m.method === 'Network.requestWillBeSent') urls.set(m.params.requestId, m.params.request.url);
  if (m.method === 'Network.loadingFailed' && !m.params.canceled) {
    failedRequests.push(`${m.params.errorText} ${urls.get(m.params.requestId) || ''}`.slice(0, 300));
  }
};
await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const i = ++id;
    pending.set(i, resolve);
    ws.send(JSON.stringify({ id: i, method, params }));
  });
const evaluate = async (expression) =>
  (await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })).result?.result?.value;

await send('Runtime.enable');
await send('Network.enable');
await send('Page.enable');

// Let the first screen finish loading before stepping through pages.
await new Promise((r) => setTimeout(r, 8000));

const pages = ['home', 'store', 'store/lottie', 'store/stickers', 'pricing', 'downloads', 'slides', 'docs', 'pdf'];
const report = { platform: await evaluate('navigator.userAgent'), pages: [] };
let emptyPages = 0;
for (const hash of pages) {
  await evaluate(`location.hash = '#${hash}'; 1`);
  await new Promise((r) => setTimeout(r, 4000));
  const info = JSON.parse(
    await evaluate(
      `JSON.stringify({ title: document.title, textLength: document.body.innerText.length, images: [...document.images].filter((i) => i.complete && i.naturalWidth > 0).length })`
    )
  );
  if (info.textLength < 80) emptyPages += 1;
  report.pages.push({ hash, ...info });
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(`${outDir}/${hash.replace(/\//g, '-')}.png`, Buffer.from(shot.result.data, 'base64'));
  console.log(`${hash.padEnd(16)} title="${info.title}" text=${info.textLength} images=${info.images}`);
}

report.exceptions = exceptions;
report.consoleErrors = consoleErrors;
report.failedRequests = failedRequests;
fs.writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
console.log(`user agent: ${report.platform}`);
console.log(`uncaught exceptions: ${exceptions.length}, console errors: ${consoleErrors.length}, failed requests: ${failedRequests.length}`);
for (const line of [...exceptions, ...consoleErrors, ...failedRequests]) console.log(`  ${line}`);
ws.close();

if (exceptions.length || emptyPages) {
  console.error(`FAILED: ${exceptions.length} uncaught exception(s), ${emptyPages} empty page(s)`);
  process.exit(1);
}
console.log('PASSED');
process.exit(0);
