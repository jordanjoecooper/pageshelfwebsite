# PageShelf website

Static website for [pageshelf.app](https://pageshelf.app), introducing the PageShelf reading app and publishing its privacy policy.

## Pages and assets

- `index.html` — branded product landing page and App Store “Coming soon” badge.
- `privacy.html` — PageShelf privacy policy.
- `assets/` — shared PageShelf mark, stylesheet, and small navigation script.
- `CNAME` — custom domain for GitHub Pages.

## Preview

Run a local server from this directory:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. The site uses plain HTML, CSS, SVG, and vanilla JavaScript; no build step or external packages are required.
