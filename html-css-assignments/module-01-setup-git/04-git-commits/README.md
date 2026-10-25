# Assignment 04 — Repository with at least three meaningful commits

A *meaningful* commit = one logical change + a clear message in the imperative mood (≤ 72 characters).

## Quick way (uses this whole repo)
From the repository root:
```bash
git config --global user.name  "Your Name"
git config --global user.email "you@example.com"
bash make-commits.sh        # creates one commit per module (10 commits)
git log --oneline           # copy this output into the table below
```

## Manual way (if you want to do it step by step)
```bash
git init -b main
git add README.md
git commit -m "docs: add project README"
git add module-01-setup-git
git commit -m "feat(module-01): add setup and Git assignments"
git add module-02-html-basics
git commit -m "feat(module-02): add HTML basics assignments"
```

## Good vs bad commit messages
| ❌ Bad | ✅ Good |
|-------|---------|
| `update` | `fix(module-02): close unclosed tags in buggy.html` |
| `final final` | `feat(module-06): add profile and product card components` |
| `asdf` | `docs: add design notes for styled multi-page project` |

## Proof (paste your own `git log --oneline` here)
```text
(paste output here after running the commands)
```
