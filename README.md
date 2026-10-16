# Kroma Ecosystem for Mac

This repository publishes the macOS app of [Kroma](https://kromaecosystem.tech). Kroma is a set of 21 tools for notes, PDFs and media, all in one private workspace.

## Download

**[Download Kroma 2.5.0 for Mac](https://github.com/mutlukurt/kromadesktop/releases/latest/download/Kroma-2.5.0-arm64.dmg)**
- File: `Kroma-2.5.0-arm64.dmg`, 255 MB
- Requires macOS 12 or later on Apple silicon (M1 or newer)

### Verify the download
Run this in Terminal:
```bash
shasum -a 256 ~/Downloads/Kroma-2.5.0-arm64.dmg
```
The output should be exactly:
```text
eb822aceefd09e70f6f9d28c92cda07fe50a469ec9328c5568607c638accd1f2
```

## Install
1. Open the DMG and drag **Kroma Ecosystem** into **Applications**.
2. The app is signed ad-hoc but not notarized by Apple, so macOS blocks the first launch.
3. To allow it, open **System Settings → Privacy & Security**, scroll down, and click **Open Anyway** next to Kroma Ecosystem.

## What's inside
- **All 21 studios**, among them:
  - Docs, with 4,676 templates
  - Kroma AI
  - PDF Studio
  - Studio OCR, with Apple Vision
  - Transcribe, using Whisper on your device
  - Reader
  - Recall, with FSRS flashcards
  - Citations
  - Vault
  - Slides
  - Audio Lab, with a crash-safe 10-hour recorder
  - Screen & GIF
- **Works offline.** Files are processed on your Mac. Cloud sync is optional and part of Pro.
- **Native shortcuts.** ⌘N new page, ⌘K search, ⌘1–⌘9 jump to a studio, ⇧⌘H all studios.
- **Security.** Sandboxed renderer, content security policy, validated native calls, no telemetry.

## Links
- Website and web app: https://kromaecosystem.tech
- Release notes: https://github.com/mutlukurt/kromadesktop/releases
- Support: withkromastudio@gmail.com

© 2026 Mutlu Kurt. Commercial software. All rights reserved.
