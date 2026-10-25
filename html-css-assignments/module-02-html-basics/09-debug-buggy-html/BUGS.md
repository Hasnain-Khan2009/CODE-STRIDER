# Assignment 09 — Bug Report for `buggy.html`

Open `buggy.html` and `fixed.html` side by side. Every bug was fixed in `fixed.html`.

| # | Bug in `buggy.html` | Why it is a problem | Fix |
|---|---------------------|---------------------|-----|
| 1 | No `<!DOCTYPE html>` | Browser falls back to *quirks mode* and renders inconsistently | Added `<!DOCTYPE html>` on line 1 |
| 2 | `<html>` has no `lang` attribute | Screen readers and translators cannot pick the language | `<html lang="en">` |
| 3 | `<title>` is never closed | Everything after it becomes part of the title | Added `</title>` |
| 4 | No viewport meta tag | Page is not mobile-friendly | Added `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| 5 | `<h1>` closed with `</h2>` | Mismatched tags break the document structure | Changed to `</h1>` |
| 6 | `<b>` and `<i>` overlap (`<b><i></b></i>`) | Tags must nest properly, never cross | `<b>Reading <i>books</i></b> and <i>coding</i>` |
| 7 | `<p>` never closed | Relies on browser error-correction | Added `</p>` |
| 8 | `<li>` items not closed consistently | Hard to read and maintain | Closed every `<li>` |
| 9 | `<p>` placed directly inside `<ul>` | A `<ul>` may contain only `<li>` | Converted `<p>Coding</p>` to `<li>Coding</li>` |
| 10 | `<img>` has no `alt`, and `hobby.jpg` does not exist | Broken image + not accessible | `src="images/hobby.svg"` with a meaningful `alt`, plus width/height |
| 11 | Unquoted attribute values and `<a>` closed with `<a>` instead of `</a>` | Invalid HTML, link swallows following content | Quoted values, used `</a>` |
| 12 | `target="_blank"` without `rel` | Security risk (`window.opener`) | Added `rel="noopener noreferrer"` |
| 13 | Table uses `<td>` for headings, no `<caption>`/`<thead>`, cells unclosed | Not accessible, not semantic | Used `<caption>`, `<thead>`, `<th scope="col">`, `<tbody>` and closed cells |
| 14 | Form input has no `<label>`; form has no `action`/`method`; unquoted `value` | Not accessible, incomplete form | Added `<label for>` + matching `id`, `action`, `method`, quoted values |
| 15 | Missing `</html>` | Unclosed root element | Added `</html>` |

**Tip:** paste both files into https://validator.w3.org/nu/ to see the difference.
