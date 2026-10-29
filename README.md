# AImaginaries

A school project prototype for a website about AI-generated art: a landing page, a workshop page and a 3D virtual gallery you can walk through in the browser. Built with Express, EJS, Tailwind CSS and Three.js.

> **Status:** early prototype. The page structure and the 3D gallery setup are in place; the workshop and most page copy are still placeholders.

## Pages

| Route | Page |
| --- | --- |
| `/` | Landing page with links to the workshop and the gallery |
| `/workshop` | Workshop page (in progress) |
| `/galerij` | 3D gallery hallway built with Three.js |
| `/galerijTest` | Experimental gallery version |
| `/contact` | Contact page |

## Stack

- Node.js with Express and EJS templates
- Tailwind CSS
- Three.js for the 3D gallery, Swiper for image sliders

## Running it

```bash
npm install
npm start          # http://localhost:3000, restarts on changes (nodemon)
```

To rebuild the CSS while you work, run this in a second terminal:

```bash
npm run tailwind
```

## Project layout

```
app.js               Express setup
routes/index.js      page routes
views/               EJS pages
components/          shared partials (navbar)
public/javascripts/  Three.js gallery and page scripts
public/images/       gallery images and the 3D wall model
```
