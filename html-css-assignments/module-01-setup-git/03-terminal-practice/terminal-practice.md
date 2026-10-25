# Assignment 03 — Terminal Navigation Practice Sheet

Use **Git Bash** (Windows) or **Terminal** (macOS/Linux). PowerShell equivalents are given where they differ.

## Part A — Match the command (answers)
| # | Task | Bash command | PowerShell equivalent |
|---|------|--------------|-----------------------|
| 1 | Show the current folder path | `pwd` | `pwd` |
| 2 | List files and folders | `ls` | `ls` |
| 3 | List with hidden files and details | `ls -la` | `ls -Force` |
| 4 | Go into a folder named `projects` | `cd projects` | `cd projects` |
| 5 | Go up one level | `cd ..` | `cd ..` |
| 6 | Go to the home folder | `cd ~` | `cd ~` |
| 7 | Create a folder `html-practice` | `mkdir html-practice` | `mkdir html-practice` |
| 8 | Create an empty file `index.html` | `touch index.html` | `ni index.html` |
| 9 | Copy `index.html` to `backup.html` | `cp index.html backup.html` | `cp index.html backup.html` |
| 10 | Rename/move `backup.html` to `old.html` | `mv backup.html old.html` | `mv backup.html old.html` |
| 11 | Show file contents | `cat index.html` | `cat index.html` |
| 12 | Delete a file | `rm old.html` | `rm old.html` |
| 13 | Delete a folder and everything inside | `rm -r folder-name` | `rm -r folder-name` |
| 14 | Clear the screen | `clear` | `cls` |
| 15 | Open the current folder in VS Code | `code .` | `code .` |

## Part B — Hands-on exercise (run these in order)
```bash
cd ~                       # 1. go to home
mkdir terminal-practice    # 2. create a folder
cd terminal-practice       # 3. enter it
mkdir css images           # 4. create two sub-folders
touch index.html css/style.css
ls -R                      # 5. list everything recursively
cp index.html about.html   # 6. copy a file
mv about.html contact.html # 7. rename it
rm contact.html            # 8. delete it
pwd                        # 9. confirm where you are
cd ..                      # 10. go up one level
```

## Part C — Answer sheet (fill in from YOUR terminal)
| Question | Your output |
|----------|-------------|
| What does `pwd` print right now? | |
| What does `ls -R` print after step 5? | |
| What is the difference between `cd ..` and `cd ~`? | `..` = parent of the current folder; `~` = your home folder |
| Why is `rm -r` dangerous? | It deletes folders permanently — there is no recycle bin. |
| What does Tab do while typing a path? | Auto-completes file/folder names |
| What does the Up arrow do? | Recalls previous commands |
