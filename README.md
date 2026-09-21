<h1 align="center">Abdalrahman Bsharat — Portfolio</h1>

<p align="center">
  Flutter Developer · Backend Developer · Computer Systems Engineer
</p>

<p align="center">
  <a href="https://abdalrahmanbsharat.github.io/portfolio/"><strong>🔗 Visit the live portfolio →</strong></a>
</p>

<p align="center">
  <a href="https://github.com/AbdalrahmanBsharat/portfolio/actions/workflows/deploy.yml">
    <img alt="Deploy status" src="https://github.com/AbdalrahmanBsharat/portfolio/actions/workflows/deploy.yml/badge.svg">
  </a>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white">
</p>

---

## About

A single-page personal portfolio — dark, glass-panelled, and animated throughout. Built with
React 19 and Vite, styled with Tailwind, and animated with Framer Motion. Every section is a
self-contained component, and the whole site deploys to GitHub Pages on each push to `main`.

**Live at → <https://abdalrahmanbsharat.github.io/portfolio/>**

## What's on the page

| Section | What it holds |
|---|---|
| **Hero** | Animated name, a rotating role line, CV download, and social links |
| **About** | Background, and what I build |
| **Skills** | Five grouped categories — mobile, backend, databases & cloud, tooling, and what I'm learning now |
| **Projects** | Seven shipped projects as interactive cards, each with its stack and links |
| **Experience** | Education and work history on a vertical timeline |
| **Contact** | Email, LinkedIn, GitHub, and location |

## Featured projects

| Project | What it is | Built with |
|---|---|---|
| **Triosuite Invoices** | Full-stack ERP sales-invoice system — multi-currency, tax-inclusive/exclusive maths, server-side invoice numbering, barcode scanning | Flutter · Spring Boot · Java 21 · MySQL · Docker |
| **Wahad** — [wahadd.com](https://wahadd.com) | Arabic-first (RTL) platform for an entrepreneurship and financial-literacy organization, prerendered to static HTML | React 19 · Vite · Custom SSR plugin |
| **Tameenak** | Insurance marketplace across 36 screens — travel and property purchase journeys, camera-based KYC, full EN/AR localization | Flutter · GetX · Dart |
| **Studify** | Smart academic assistant with an AI chatbot, semantic PDF search, and role-based access | Flutter · PostgreSQL · AWS S3 · OpenAI · .NET |
| **TIKITAKA** | Football match tracker with live scores and sports news | Flutter · REST API · Provider |
| **Note Taking App** | Cross-platform notes with Google/email auth and a real-time database | Flutter · Firebase · Firestore |
| **Electronics Shop** | E-commerce web app with cart, catalogue, and a .NET backend | HTML · CSS · JavaScript · .NET |

## Tech stack

**Framework** React 19 with the React Compiler · **Build** Vite 8 · **Styling** Tailwind CSS 3 +
PostCSS · **Animation** Framer Motion 12 · **Icons** react-icons · **Quality** ESLint 9 ·
**Hosting** GitHub Pages via GitHub Actions

## Running it locally

Needs **Node 22** or newer.

```bash
git clone https://github.com/AbdalrahmanBsharat/portfolio.git
cd portfolio/portfolio
npm install
npm run dev          # http://localhost:5173/portfolio/
```

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Produce a production build in `dist/` |
| `npm run preview` | Serve that build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```
.
├── .github/workflows/deploy.yml    # Builds and publishes to GitHub Pages
└── portfolio/                      # The Vite application
    ├── public/                     # CV, favicon, icon sprite
    ├── src/
    │   ├── components/             # Navbar, Hero, About, Skills,
    │   │                           #   Projects, Experience, Contact, Footer
    │   ├── assets/
    │   ├── App.jsx
    │   └── main.jsx
    ├── tailwind.config.js
    └── vite.config.js              # base: '/portfolio/'
```

Adding a project means one object in the `projects` array in
[`src/components/Projects.jsx`](portfolio/src/components/Projects.jsx) — title, badge, description,
tech pills, and its gradient. Give it a `live` field and the ↗ button opens that URL instead of
GitHub.

## Deployment

Every push to `main` triggers [`deploy.yml`](.github/workflows/deploy.yml): it installs with
`npm ci`, runs `npm run build`, and publishes `portfolio/dist` to GitHub Pages. The site is served
from a sub-path, so `vite.config.js` sets `base: '/portfolio/'` — asset URLs must respect it.

## Contact

- **Email** — [abd.bsharatt@gmail.com](mailto:abd.bsharatt@gmail.com)
- **LinkedIn** — [abd-alrahman-bsharatt](https://www.linkedin.com/in/abd-alrahman-bsharatt/)
- **GitHub** — [@AbdalrahmanBsharat](https://github.com/AbdalrahmanBsharat)
- **Location** — Amman, Jordan
