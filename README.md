# CV Generator

A CV generator using React PDF for Carlos Santisteban Pozas.

## Live CV (GitHub Pages)

- Public URL: [https://santistebanc.github.io/cv/](https://santistebanc.github.io/cv/)

If GitHub Pages is not enabled yet, set it once in repository settings:
- **Settings → Pages → Build and deployment**
- **Source:** Deploy from a branch
- **Branch:** `master` (or `main`) and folder `/docs`

## Installation

Install dependencies:

```bash
npm install
```

## Generate CV

To generate the PDF CV:

```bash
npm start
```

The CV will be generated as `Carlos_Santisteban_CV.pdf` in the current directory.

## Publish / Refresh GitHub Pages

After generating a new PDF, copy it to `docs` and push:

```bash
npm start
cp Carlos_Santisteban_CV.pdf docs/Carlos_Santisteban_CV.pdf
git add cv-component.js Carlos_Santisteban_CV.pdf docs/Carlos_Santisteban_CV.pdf docs/index.html README.md
git commit -m "Update CV and GitHub Pages"
git push
```

## Files

- `cv-component.js` - React PDF component containing the CV structure and styling
- `generate-cv.js` - Script to generate the PDF from the component
- `docs/index.html` - GitHub Pages entry page that embeds the CV
- `docs/Carlos_Santisteban_CV.pdf` - PDF served by GitHub Pages
- `package.json` - Project dependencies and scripts

## Requirements

- Node.js 14+ 
- npm or yarn

