# Assignment 02 — Setup Proof (VS Code + Node.js + Live Server)

> ⚠️ **This one must come from YOUR computer.** A screenshot is proof of *your* setup, so take it yourself and save it here as `setup-proof.png`.

## What the screenshot must show
1. **VS Code** open with this project folder.
2. The **integrated terminal** (`` Ctrl + ` ``) showing the output of:
   ```bash
   code --version
   node -v
   npm -v
   git --version
   ```
3. **`hello.html` running through Live Server** in your browser (address bar should show `http://127.0.0.1:5500/...`).

## Installation checklist
| Tool | Where to get it | Check command | Example output |
|------|-----------------|---------------|----------------|
| VS Code | https://code.visualstudio.com | `code --version` | `1.9x.x` |
| Node.js (LTS) | https://nodejs.org | `node -v` | `v22.x.x` |
| npm (comes with Node) | — | `npm -v` | `10.x.x` |
| Git | https://git-scm.com | `git --version` | `git version 2.4x.x` |
| Live Server (VS Code extension, Ritwick Dey) | Extensions panel (`Ctrl+Shift+X`) → search "Live Server" | Right-click `hello.html` → **Open with Live Server** | Browser opens on port 5500 |

## Steps
1. Install VS Code, Node.js (LTS) and Git.
2. Open VS Code → Extensions → install **Live Server**.
3. Open this folder in VS Code (`File → Open Folder`).
4. Right-click `hello.html` → **Open with Live Server**.
5. Change the heading text, save, and watch the browser reload automatically.
6. Take the screenshot, save it as `setup-proof.png` in this folder, then commit it.

## Submission
- [ ] `setup-proof.png` added
- [ ] Committed: `git add . && git commit -m "docs: add setup proof screenshot"`
