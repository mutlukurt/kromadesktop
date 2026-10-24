<div align="center">

<img src="docs/icon.png" width="112" height="112" alt="Kroma app icon">

# Kroma Ecosystem

**21 studios for notes, PDFs, slides and media, in one private workspace. Your files stay on your computer.**

[![Latest release](https://img.shields.io/github/v/release/mutlukurt/kromadesktop?include_prereleases&label=release&color=111111)](https://github.com/mutlukurt/kromadesktop/releases)
![macOS](https://img.shields.io/badge/macOS-12%2B%20·%20Apple%20silicon-111111?logo=apple)
![Windows](https://img.shields.io/badge/Windows-10%20·%2011%20·%2064--bit-111111?logo=windows)
![Linux](https://img.shields.io/badge/Linux-AppImage%20·%20deb%20·%20rpm%20·%20Snap%20·%20Flatpak-111111?logo=linux)

**[Download for Mac](https://github.com/mutlukurt/kromadesktop/releases/download/v2.7.4/Kroma-2.7.4-arm64.dmg)** · **[Download for Windows](https://github.com/mutlukurt/kromadesktop/releases/download/v2.7.4/Kroma-Setup-2.7.4-x64.exe)** · **[Download for Linux](#download)** · [Use it in the browser](https://kromaecosystem.tech)

</div>

<br>

<p align="center"><img src="docs/kroma-promo.webp" width="880" alt="A 30-second tour of Kroma: Docs, templates, Slides, OCR handing its text to Docs, and on-device processing"></p>

## One tool hands its result to the next

<p align="center"><img src="docs/ocr-to-docs.jpg" width="880" alt="Text read from an invoice in Studio OCR, saved straight into a Docs page"></p>

Scan an invoice in **Studio OCR** and save the text to **Docs**. Turn a PDF into notes, a recording into a transcript, a highlight in **Reader** into a flashcard in **Recall**. Every studio can pass its result to the next one.

## Docs, with blocks and databases

<p align="center"><img src="docs/docs-databases.jpg" width="880" alt="A Docs page with a task board database"></p>

Block notes, tables, boards and calendars, a knowledge graph, and thousands of ready-made templates.

## Slides, with a design library built in

<p align="center"><img src="docs/slides-elements.jpg" width="880" alt="Dragging a generated badge from the Elements panel onto a slide"></p>

Hundreds of slide templates, AI decks in any language, and drag-and-drop stickers, photos, icons, charts and design elements.

## Kroma Store

<p align="center"><img src="docs/store.jpg" width="880" alt="The Kroma Store in the desktop app, on the Lottie tab"></p>

Original stickers, animations, Lottie files, design elements and templates, made for Kroma. Free ones for personal use; Pro unlocks all of them, with commercial use.

## Files are processed on your device

<p align="center"><img src="docs/on-device.jpg" width="880" alt="PDF Studio and Studio OCR work without uploading files"></p>

PDF editing, OCR, image conversion and Whisper transcription run on your computer. Nothing is uploaded unless you turn on cloud sync or use Kroma AI.

## Download

| Platform | Download | Size | Requires |
|---|---|---|---|
| **macOS** | [Kroma-2.7.4-arm64.dmg](https://github.com/mutlukurt/kromadesktop/releases/download/v2.7.4/Kroma-2.7.4-arm64.dmg) | 909 MB | Apple silicon (M1 or later), macOS 12 or later |
| **Windows** | [Kroma-Setup-2.7.4-x64.exe](https://github.com/mutlukurt/kromadesktop/releases/download/v2.7.4/Kroma-Setup-2.7.4-x64.exe) | 866 MB | Windows 10 or 11, 64-bit |
| **Linux · AppImage** | [Kroma-2.7.4-x86_64.AppImage](https://github.com/mutlukurt/kromadesktop/releases/download/v2.7.4/Kroma-2.7.4-x86_64.AppImage) | 920 MB | Any 64-bit distribution |
| **Linux · .deb** | [Kroma-2.7.4-amd64.deb](https://github.com/mutlukurt/kromadesktop/releases/download/v2.7.4/Kroma-2.7.4-amd64.deb) | 872 MB | Ubuntu, Debian, Linux Mint, Pop!_OS |
| **Linux · .rpm** | [Kroma-2.7.4-x86_64.rpm](https://github.com/mutlukurt/kromadesktop/releases/download/v2.7.4/Kroma-2.7.4-x86_64.rpm) | 835 MB | Fedora, RHEL, CentOS Stream, openSUSE |
| **Linux · Snap** | [Kroma-2.7.4-amd64.snap](https://github.com/mutlukurt/kromadesktop/releases/download/v2.7.4/Kroma-2.7.4-amd64.snap) | 884 MB | Any distribution with snapd |
| **Linux · Flatpak** | [Kroma-2.7.4-x86_64.flatpak](https://github.com/mutlukurt/kromadesktop/releases/download/v2.7.4/Kroma-2.7.4-x86_64.flatpak) | 838 MB | Any distribution with Flatpak |

Everything also runs in the browser at [kromaecosystem.tech](https://kromaecosystem.tech).

## Updates

- **The Store is live.** Stickers, animations, Lottie files, design elements and Slides templates load from kromaecosystem.tech, so new items and fixes to existing ones show up in the app without a new version. Offline, the app uses the copy it was installed with.
- **The app updates itself.** On Windows and Linux (AppImage, .deb, .rpm) a new version downloads in the background and installs when you click **Restart to update**; each download is checked against its SHA-512 first. On macOS, Snap and Flatpak the app tells you about the new version and opens its download.

## Install

<details open>
<summary><b>macOS</b></summary>

1. Open the DMG and drag **Kroma Ecosystem** into **Applications**.
2. Open the app once. It isn't notarized by Apple yet, so macOS says it can't verify the developer. Click **Done**.
3. Open **System Settings → Privacy & Security**, scroll to **Security** and click **Open Anyway** next to Kroma Ecosystem. You only do this once.

</details>

<details open>
<summary><b>Windows</b></summary>

1. Run the setup. It installs for your user account only, so it doesn't need administrator rights.
2. The installer isn't code-signed yet, so SmartScreen shows **Windows protected your PC**. Click **More info**, then **Run anyway**.
3. Open Kroma Ecosystem from the Start menu or the desktop shortcut. To remove it, use **Settings → Apps**.

</details>

<details open>
<summary><b>Linux</b></summary>

```bash
# AppImage: any distribution
chmod +x Kroma-2.7.4-x86_64.AppImage && ./Kroma-2.7.4-x86_64.AppImage
```

```bash
# Ubuntu, Debian, Linux Mint, Pop!_OS
sudo apt install ./Kroma-2.7.4-amd64.deb
```

```bash
# Fedora, RHEL, CentOS Stream, openSUSE
sudo dnf install ./Kroma-2.7.4-x86_64.rpm
```

```bash
# Snap: the second command connects Chromium's sandbox, which local installs don't do on their own
sudo snap install --dangerous ./Kroma-2.7.4-amd64.snap && sudo snap connect kroma-ecosystem:browser-sandbox
```

```bash
# Flatpak
flatpak install --user ./Kroma-2.7.4-x86_64.flatpak
```

</details>

## Verify your download

Each file's SHA-256 checksum should match exactly:

| File | SHA-256 |
|---|---|
| `Kroma-2.7.4-arm64.dmg` | `2826df74c27ea4907d189f9febe99ee35b5196c1f80715b509628a85774ac09b` |
| `Kroma-Setup-2.7.4-x64.exe` | `b3aa7b981dc843447613a2afd6430abe586c0db0f0e9ed9174a6d91423639fa0` |
| `Kroma-2.7.4-x86_64.AppImage` | `73df66be36816b21ad4ff19bc13fb6b45c887d80b392505d146a2d8e4f61263a` |
| `Kroma-2.7.4-amd64.deb` | `186539bd8ecbf24c81db022119996d06a81e3eff940ec67a97bdebc5b2b1b833` |
| `Kroma-2.7.4-x86_64.rpm` | `ce19b31586538b0e9fd647700f07666c0f4593f5608830362f0eb6dfa57e51a9` |
| `Kroma-2.7.4-amd64.snap` | `a50a0df5ad4a7b9d145fd197fbf9e5e4deee34200ebe0cf5ded2dd008dcda830` |
| `Kroma-2.7.4-x86_64.flatpak` | `968de8c1fe72d3bfc67221b88c8b1652289bb2dedfdd164cde5700db46e6945f` |

```bash
# macOS (Terminal)
shasum -a 256 ~/Downloads/Kroma-2.7.4-arm64.dmg
# Linux
sha256sum Kroma-2.7.4-x86_64.AppImage
```

```powershell
# Windows (PowerShell)
Get-FileHash $HOME\Downloads\Kroma-Setup-2.7.4-x64.exe
```

## All 21 studios

**Docs** · **Slides** · **PDF Studio** · **Studio OCR** (Apple Vision on Mac) · **Convert Suite** · **Transcribe** (Whisper) · **Reader** · **Recall** (FSRS flashcards) · **Citations Lab** · **Vault** · **Audio Lab** (crash-safe 10-hour recorder) · **Screen & GIF** · **Diagram Studio** · **Palette Lab** · **Kroma Compare** · **Kroma AI** and more.

## Privacy and security

- Files are processed on your computer. Cloud sync is optional and part of Pro.
- No telemetry.
- Sandboxed renderer with a strict content security policy, and links open in your own browser.
- The app can't be run as a plain Node.js runtime, and it checks its own package for tampering when it starts.
- Every Windows build is installed, opened and uninstalled on a clean Windows machine before release ([Windows install test](https://github.com/mutlukurt/kromadesktop/actions/workflows/windows-smoke.yml)), and every Linux package on clean Ubuntu or Fedora machines ([Linux packages](https://github.com/mutlukurt/kromadesktop/actions/workflows/linux-packages.yml)).

## Support

- Website and web app: https://kromaecosystem.tech
- Email: withkromastudio@gmail.com

<sub>© 2026 Mutlu Kurt. Commercial software. All rights reserved.</sub>
