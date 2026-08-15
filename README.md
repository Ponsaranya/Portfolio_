# Ponsaranya R — Portfolio

A recruiter-friendly, ATS-oriented developer portfolio built with React, Vite, and Tailwind CSS. Content is generated exclusively from the resume — no invented experience, projects, or numbers.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The static build output is written to `dist/`. Deploy that folder to any static host — Vercel, Netlify, GitHub Pages, or Cloudflare Pages all work with zero extra config.

## Editing content

Everything text-based lives in **one file**: `src/data/resumeData.js`.

- `profile` — name, headline, contact links, status pill
- `summary` — About section paragraph
- `aboutHighlights` — the four highlight cards in About
- `skills` — category → items, rendered as tag groups
- `experience` — role history, in order
- `projects` — project cards (AI/GenAI ones first)
- `publication` — the CRC Press paper
- `education` — degrees, in order
- `certifications`, `hackathons`, `extracurricular` — Achievements section

Update the values there and the whole site updates — no need to touch any component file for a content change.

## Design notes

- **Palette**: deep ink navy (`#0B1120`) bookends a warm paper background (`#F7F5F0`), with a single amber signal color (`#E8A33D`) used sparingly for emphasis and links.
- **Type**: Space Grotesk for display headings, Inter for body copy, JetBrains Mono for section labels and tags — a nod to the automation/engineering subject matter without leaning on generic "AI startup" gradients or glassmorphism.
- **Structure**: section eyebrows are written like code comments (`// 01 — about`) since the content itself is a build log of real engineering and coursework.
- Fully responsive (mobile, tablet, desktop), smooth-scrolls to in-page anchors, keyboard-focus states are visible, and `prefers-reduced-motion` is respected.

## Project structure

```
src/
  data/resumeData.js   ← edit content here
  components/          ← one component per section
  App.jsx              ← composes the page
  index.css            ← Tailwind + global styles
```
