# Assignment 24 — Design-token stylesheet

`tokens.css` defines every colour, font size, spacing step, radius and shadow as a CSS variable (`--token-name`). `style.css` contains **no hard-coded colours or sizes** — only `var(--…)`.

**Try it:** change `--color-primary` in `tokens.css` and refresh. The hero, buttons, headings and swatches all update. Dark mode is handled by re-defining the tokens inside `@media (prefers-color-scheme: dark)`.
