# Assignment 14 — Semantic Improvements

`before.html` is an earlier page built only from `<div>`s. `after.html` is the same content with meaningful tags.

| Before (`div` soup) | After (semantic) | Benefit |
|---------------------|------------------|---------|
| `<div id="header">` | `<header>` | Screen readers announce a banner landmark |
| `<div class="title">` | `<h1>` | Real page title for search engines and outline |
| `<div class="menu">` + loose links | `<nav>` with `<ul><li><a>` | Navigation landmark; links grouped as a list |
| `<div id="content">` | `<main>` | Lets users skip straight to the main content |
| `<div id="about">` etc. | `<section>` | Each topic is a labelled thematic group |
| `<div class="heading">` | `<h2>` | Proper heading hierarchy (h1 → h2) |
| `1. … <br>2. … <br>` | `<ol><li>` | Real ordered list; numbering is automatic |
| `<div>` with an email | `<address>` + `mailto:` link | Marks contact info and makes it clickable |
| `<div class="side">` date | `<aside>` + `<time datetime>` | Related, machine-readable date |
| `<div id="footer">` | `<footer>` + `<small>` | Footer landmark; legal text marked as small print |

Checked: only one `<h1>`, headings never skip a level, and every page has `lang="en"`.
