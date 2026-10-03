# Tulas International School — Homepage Redesign

A modern, responsive and animated homepage redesign for **Tulas International School (TIS)**, developed as a Frontend Developer assignment.

The redesign retains the school's existing content structure, navigation and visual identity while introducing a modern, editorial-style user experience with responsive layouts, smooth animations and interactive elements.

---

## Live Demo

Add the deployed URL here.

## GitHub Repository

Add the GitHub repository URL here.

---

## Features

- Responsive design for desktop, tablet and mobile
- Custom interactive cursor
- Scroll-triggered reveal animations
- Light / dark theme switcher
- Scroll progress indicator
- Animated desktop and mobile navigation
- Mobile accordion navigation
- Responsive 16-sport gallery
- Real TIS imagery
- Interactive hover animations
- Smooth internal navigation
- Semantic HTML and descriptive image alt text
- Reusable React components
- Data-driven content structure

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- ESLint

---

## Component Architecture

The project separates UI, layout, page sections, effects, global state and content data.

- `components/layout/` — Navbar and Footer
- `components/sections/` — Hero, About, Stats, Academics, Sports and Admissions
- `components/effects/` — Custom Cursor, Scroll Progress and Scroll Reveal
- `components/ui/` — Reusable UI components
- `context/` — Theme context, provider and custom hook
- `data/` — Navigation and section content

This structure keeps content separate from presentation and makes the homepage easier to extend.

---

## Project Structure

```text
src/
├── components/
│   ├── effects/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── context/
│   ├── themeContext.js
│   ├── ThemeProvider.jsx
│   └── useTheme.js
│
├── data/
│   ├── academics.js
│   ├── admissions.js
│   ├── hero.js
│   ├── navigation.js
│   ├── sports.js
│   └── stats.js
│
├── App.jsx
├── index.css
└── main.jsx

```
---

## Getting Started

### Install dependencies

    npm install

### Run development server

    npm run dev

### Run ESLint

    npm run lint

### Create production build

    npm run build

---

## Brand Identity

The redesign retains:

- TIS branding and logo
- Existing navigation structure
- Core TIS content and messaging where appropriate
- Official TIS imagery
- Relevant TIS navigation and admission links

---

## Design & Animation

The redesign uses an editorial, image-led visual direction with:

- Strong typography
- Generous spacing
- Asymmetric layouts
- Real TIS photography
- Subtle motion
- Theme-aware styling
- Interactive hover states
- Clear admission calls-to-action

Animations are implemented using Framer Motion and are designed to enhance the experience without distracting from the content.

---

## Responsive Design

The homepage was tested across:

- Mobile — 375px
- Tablet — 768px
- Desktop

The layout adapts navigation, typography, galleries, content sections and calls-to-action to different screen sizes.

---

## Deployment

The project can be deployed using:

- Vercel
- Netlify

The final deployment URL will be added to the Live Demo section after deployment.

---

## Assignment

This project was developed as part of a Frontend Developer assessment for the Tulas International School homepage redesign.

The implementation focuses on:

- Clean component architecture
- Responsive frontend development
- Animation and interaction quality
- Modern visual design
- Reusable React components
- Maintainable content structure
- Real TIS imagery and navigation
- Light and dark theme support