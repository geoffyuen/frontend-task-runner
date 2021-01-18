Npm script to compile scss (./style.css), js (./main.min.js).

- `npm watch` to compile when files change.
- `npm run build` to build files once,
- `npm start` to watch file changes and refresh browser.

✅ Sass
✅ cssnano
✅ autoprefixer
✅ uglifyjs

Notes:

- remember: postcss settings are in postcss.config.js

Gotchas:

- When saving an .scss file, onchange triggers at least 2-3 times for some reason