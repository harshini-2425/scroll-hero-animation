# Itz Fizz Scroll-Driven Hero Animation

Premium scroll animation project built with React, Vite, Tailwind CSS, and GSAP ScrollTrigger.

## Features

- Full-screen hero with letter-spaced headline and animated stats.
- GSAP load timeline with staggered letter reveal and delayed stat entry.
- Scroll-driven car scene with pinning, progress bar, parallax layers, and wheel spin.
- Quartile-based motion pacing for a more cinematic drive arc.
- Profile-driven motion settings for desktop, mobile, and reduced-motion users.
- Transform-first animation approach for smoother rendering.

## Run Locally

Prerequisites:
- Node.js v18+
- npm v9+

Commands:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This project uses a robust deploy helper at scripts/deploy-pages.mjs.

How it resolves repository URL:
1. Uses GH_PAGES_REPO if set.
2. Otherwise reads git remote origin.
3. If neither exists, exits with a clear error.

Deploy command:

```bash
npm run deploy
```

PowerShell example for non-git folder:

```powershell
$env:GH_PAGES_REPO = "https://github.com/USER/REPO.git"
npm run deploy
```

## Assignment Coverage Checklist

1. Hero Section Layout
- Full-screen hero: implemented.
- Letter-spaced headline: implemented.
- Stats under headline with value + label: implemented.

2. Initial Page Load Animation
- Headline fade-in: implemented.
- Staggered letters: implemented.
- Stats one-by-one: implemented.
- GSAP used: implemented.

3. Scroll-Driven Animation
- Main visual object (car): implemented.
- Scroll-triggered progress: implemented.
- ScrollTrigger integration: implemented.
- Smooth scrubbed motion: implemented.
- Pinned viewport section: implemented.

4. Motion Performance
- Transform-based movement and scaling: implemented.
- Layout-shift-prone animation avoided in main timeline: implemented.
- Scroll update optimized with quickSetter: implemented.

5. Code Structure
- Component separation: implemented.
- Tailwind styling usage: implemented.
- Readable profile-based motion config: implemented.

## Tuning Guide

Primary knobs are in src/components/ScrollSection.jsx:
- MOTION_PRESETS desktop/mobile/reduced values.
- Quartile targets carAt25, carAt75, carAt100.
- wheelRotation, bgTravel, fgTravel, and speedLine settings.

Built by Itz Fizz Studio.
