<div align="center">

<img src="docs/icon.png" width="112" height="112" alt="Kroma app icon">

# Kroma Ecosystem

**21 studios for notes, PDFs, slides and media, in one private workspace. Your files stay on your computer.**

[![Latest release](https://img.shields.io/github/v/release/mutlukurt/kromadesktop?include_prereleases&label=release&color=111111)](https://github.com/mutlukurt/kromadesktop/releases)
![macOS](https://img.shields.io/badge/macOS-12%2B%20·%20Apple%20silicon-111111?logo=apple)
![Windows](https://img.shields.io/badge/Windows-10%20·%2011%20·%2064--bit-111111?logo=windows)
![Linux](https://img.shields.io/badge/Linux-AppImage%20·%20deb%20·%20rpm%20·%20Snap%20·%20Flatpak-111111?logo=linux)

**[Download for Mac](https://github.com/mutlukurt/kromadesktop/releases/download/v3.0.0/Kroma-3.0.0-arm64.dmg)** · **[Download for Windows](https://github.com/mutlukurt/kromadesktop/releases/download/v3.0.0/Kroma-Setup-3.0.0-x64.exe)** · **[Download for Linux](#download)** · [Use it in the browser](https://kromaecosystem.tech)

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
| **macOS** | [Kroma-3.0.0-arm64.dmg](https://github.com/mutlukurt/kromadesktop/releases/download/v3.0.0/Kroma-3.0.0-arm64.dmg) | 795 MB | Apple silicon (M1 or later), macOS 12 or later |
| **Windows** | [Kroma-Setup-3.0.0-x64.exe](https://github.com/mutlukurt/kromadesktop/releases/download/v3.0.0/Kroma-Setup-3.0.0-x64.exe) | 765 MB | Windows 10 or 11, 64-bit |
| **Linux · AppImage** | [Kroma-3.0.0-x86_64.AppImage](https://github.com/mutlukurt/kromadesktop/releases/download/v3.0.0/Kroma-3.0.0-x86_64.AppImage) | 804 MB | Any 64-bit distribution |
| **Linux · .deb** | [Kroma-3.0.0-amd64.deb](https://github.com/mutlukurt/kromadesktop/releases/download/v3.0.0/Kroma-3.0.0-amd64.deb) | 762 MB | Ubuntu, Debian, Linux Mint, Pop!_OS |
| **Linux · .rpm** | [Kroma-3.0.0-x86_64.rpm](https://github.com/mutlukurt/kromadesktop/releases/download/v3.0.0/Kroma-3.0.0-x86_64.rpm) | 742 MB | Fedora, RHEL, CentOS Stream, openSUSE |
| **Linux · Snap** | [Kroma-3.0.0-amd64.snap](https://github.com/mutlukurt/kromadesktop/releases/download/v3.0.0/Kroma-3.0.0-amd64.snap) | 781 MB | Any distribution with snapd |
| **Linux · Flatpak** | [Kroma-3.0.0-x86_64.flatpak](https://github.com/mutlukurt/kromadesktop/releases/download/v3.0.0/Kroma-3.0.0-x86_64.flatpak) | 744 MB | Any distribution with Flatpak |

Everything also runs in the browser at [kromaecosystem.tech](https://kromaecosystem.tech).

## First launch

Kroma opens on a start screen: the Kroma film plays behind a sign-in panel. Sign in with your Kroma account, or create a free one there, and your studios open. The app checks your account with Kroma's server, so it needs an internet connection to open the studios.

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
chmod +x Kroma-3.0.0-x86_64.AppImage && ./Kroma-3.0.0-x86_64.AppImage
```

```bash
# Ubuntu, Debian, Linux Mint, Pop!_OS
sudo apt install ./Kroma-3.0.0-amd64.deb
```

```bash
# Fedora, RHEL, CentOS Stream, openSUSE
sudo dnf install ./Kroma-3.0.0-x86_64.rpm
```

```bash
# Snap: the second command connects Chromium's sandbox, which local installs don't do on their own
sudo snap install --dangerous ./Kroma-3.0.0-amd64.snap && sudo snap connect kroma-ecosystem:browser-sandbox
```

```bash
# Flatpak
flatpak install --user ./Kroma-3.0.0-x86_64.flatpak
```

</details>

## Verify your download

Each file's SHA-256 checksum should match exactly:

| File | SHA-256 |
|---|---|
| `Kroma-3.0.0-arm64.dmg` | `4aaa77741d807fe432006554dff889c55bb6fcef3d9efef2bbe405d2fd3bb4ef` |
| `Kroma-Setup-3.0.0-x64.exe` | `bfe8d69e429cececf4028ecab06929694363e52f8d33f43899725592b5606937` |
| `Kroma-3.0.0-x86_64.AppImage` | `85a8b7ed1d9b42c77daa8b9222d716f9b802eb54774ba38a964af69a76191f55` |
| `Kroma-3.0.0-amd64.deb` | `90b3f8ece978d4f7fdc9b0dada036d809c959c6053ee8ab5610f5d4e4e44161f` |
| `Kroma-3.0.0-x86_64.rpm` | `57087c1e68b16db49b6c3d7dbea9d4934e059726a97cda2ce5890258f0728c20` |
| `Kroma-3.0.0-amd64.snap` | `c5f5114dae4030ce7c40c5f75a3b21e8af6f23c1caa94dc9130406d7ed1291db` |
| `Kroma-3.0.0-x86_64.flatpak` | `ac0ae45fe5264b7a0ab3a1e3a3ad2d8e10dd152dde2b931f51a8c9bb03f8ff38` |

```bash
# macOS (Terminal)
shasum -a 256 ~/Downloads/Kroma-3.0.0-arm64.dmg
# Linux
sha256sum Kroma-3.0.0-x86_64.AppImage
```

```powershell
# Windows (PowerShell)
Get-FileHash $HOME\Downloads\Kroma-Setup-3.0.0-x64.exe
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
