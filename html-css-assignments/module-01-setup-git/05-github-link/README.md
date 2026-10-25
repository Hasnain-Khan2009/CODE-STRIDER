# Assignment 05 — Pushed GitHub Repository Link

> ⚠️ Only **you** can create this link — it points to your own GitHub account.

## Steps
1. Create a free account at https://github.com and verify your email.
2. Click **New repository** → name it `html-css-assignments` → keep it **Public** → do **not** add a README (this repo already has one) → **Create repository**.
3. In your terminal, from the repository root:
   ```bash
   git remote add origin https://github.com/<your-username>/html-css-assignments.git
   git branch -M main
   git push -u origin main
   ```
   (GitHub asks for a Personal Access Token instead of a password: *Settings → Developer settings → Personal access tokens*; or sign in via Git Credential Manager / GitHub CLI `gh auth login`.)
4. Refresh the GitHub page — all 9 module folders should be visible.
5. *(Optional)* Show the site live: **Settings → Pages → Branch: main / root → Save**. The root `index.html` becomes your assignment hub.

## Submit this
| Item | Your link |
|------|-----------|
| Repository URL | `https://github.com/<your-username>/html-css-assignments` |
| Live site (optional) | `https://<your-username>.github.io/html-css-assignments/` |

## Verification checklist
- [ ] Repository is Public (so your teacher can open it)
- [ ] All 9 module folders are visible on GitHub
- [ ] `git log --oneline` shows 3 or more commits
- [ ] The link opens in a private/incognito window
