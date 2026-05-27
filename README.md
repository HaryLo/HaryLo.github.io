# Hengyi Luo Personal Website

This is a lightweight static personal website for Hengyi Luo. It has no build step and can be deployed to GitHub Pages, Netlify, or any static hosting service.

## Structure

```text
.
|-- index.html
|-- 404.html
|-- robots.txt
|-- assets/
|   |-- css/styles.css
|   |-- img/
|   |   |-- profile-mark.jpg
|   |   `-- pushkin-life-deceives-you.jpg
|   `-- js/
|       |-- main.js
|       `-- site-data.js
|-- scripts/serve.mjs
`-- package.json
```

## Local Preview

```bash
npm run start
```

Then open `http://127.0.0.1:4173/`.

## Editing Content

- Main profile, education, and publications: `assets/js/site-data.js`
- Layout and metadata: `index.html`
- Visual style: `assets/css/styles.css`
- Hero image: `assets/img/pushkin-life-deceives-you.jpg`
- Handwritten profile mark: `assets/img/profile-mark.jpg`

## Deploy To GitHub Pages

1. Create a repository named `your-username.github.io`.
2. Put these files in the repository root.
3. Push to the `main` branch.
4. In GitHub, open `Settings -> Pages`.
5. Set `Source` to `Deploy from a branch`, branch `main`, folder `/root`.
6. Visit `https://your-username.github.io/` after GitHub Pages finishes deployment.

If you use a custom domain later, add a `CNAME` file containing the domain name and update page metadata with the final URL.
