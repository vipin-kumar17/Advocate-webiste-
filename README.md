# Kulkarni & Associates — Advocate Website

A fully animated, multi-page advocate/law-chambers website built with **Next.js 16**, **GSAP (ScrollTrigger)**, **Framer Motion**, and **Three.js** (via `@react-three/fiber` + `@react-three/drei`).

## What's inside

- **Separate route per nav item** — `/`, `/about`, `/practice-areas`, `/results`, `/gallery`, `/contact` (App Router, each a real page, not a single-page scroll site).
- **Animated 3D hero** — a rotating brass "scales of justice" emblem built from Three.js primitives, with gold particle dust, mouse-parallax rotation and ambient/point/directional brass-toned lighting.
- **GSAP ScrollTrigger** — scroll-triggered section reveals, staggered grids, a parallax image gallery, and animated stat counters.
- **Framer Motion** — animated route transitions on every navigation, a full-screen mobile menu with a circular reveal, and an animated contact-form confirmation state.
- **Design** — a mahogany / antique-brass / parchment palette with Fraunces (display serif) and Inter (body), built around your courtroom photography.
- Fully responsive, from mobile through wide desktop.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.js          root layout (fonts, navbar, footer, transitions)
    page.js             Home
    about/page.js        The Advocate
    practice-areas/page.js
    results/page.js      Notable Matters
    gallery/page.js       Chambers
    contact/page.js
  components/
    Navbar.js, Footer.js, Transitions.js, Logo.js
    ScrollReveal.js       GSAP reveal wrapper
    ParallaxImage.js      GSAP scrub parallax image
    StatCounter.js        GSAP count-up
    ContactForm.js        Framer Motion form
    hero/
      Hero3D.js           dynamic (ssr:false) loader
      Scene.js             react-three-fiber canvas
      JusticeScale.js       3D emblem geometry
  fonts/                  self-hosted Fraunces + Inter (no external font fetch needed)
  lib/content.js          all site copy/data in one place — edit here first
public/images/            your six uploaded photographs
```

## Customising

- **Text & data**: almost everything (practice areas, notable matters, timeline, stats) lives in `src/lib/content.js`.
- **Colours**: tokens are defined in `src/app/globals.css` under `:root` (`--brass`, `--ink`, `--parchment`, etc).
- **Name/branding**: the site currently uses a placeholder name, "Kulkarni & Associates" — replace it in `Logo.js`, `layout.js` metadata, and `content.js` with your real details.
- **Contact form**: `ContactForm.js` currently shows a confirmation state on submit but doesn't send anywhere — wire it up to an API route or a form service (e.g. Formspree, Resend) when you're ready to go live.
