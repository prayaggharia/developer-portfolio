# Prayag Gharia — Developer Portfolio

A modern, interactive portfolio website built with React, featuring a unique **Terminal Genesis** dark theme with neon green accents, interactive skill filtering, and smooth Framer Motion animations.

🔗 **Live:** _Coming soon_

---

## Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | React 18, Vite |
<<<<<<< HEAD
| **Routing** | React Router v6 |
=======
| **Routing** | React Router v7 |
>>>>>>> 388bcf2ac9aefbc3727189e205741250c1800204
| **Animations** | Framer Motion |
| **Styling** | CSS (custom properties for dark/light theming) |
| **Libraries** | React Parallax Tilt, React Type Animation, React Scroll, React Icons |

## Features

- **Dark / Light Theme Toggle** — CSS custom properties switch the entire palette
- **Interactive Skills Section** — Filter by category (Backend, Frontend, Database, Tools, Practices) with animated card transitions
- **Alternating Career Timeline** — Left-right zigzag layout with glowing neon dots
- **Typewriter Hero** — Cycles through roles: Full Stack Developer, .NET Engineer, SQL Performance Architect, etc.
- **Green Cursor Glow** — Mouse-following radial gradient on the hero section
- **Custom Neon Cursor** — SVG-based green dot cursor site-wide
- **Parallax Tilt Cards** — 3D hover effect on About and Skills cards
<<<<<<< HEAD
- **Separate Projects Page** — React Router `/projects` route (interactive showcase in progress)
=======
- **Projects Page** — `/projects` route with project tiles and WIP indicators
- **Blogs Page** — `/blogs` route for future writings and articles
- **Resume** — PDF served at `/resume.pdf`, linked in navbar
>>>>>>> 388bcf2ac9aefbc3727189e205741250c1800204
- **CRT Scanline Overlay** — Subtle retro monitor effect on the hero
- **Responsive** — Mobile-friendly with hamburger nav and single-column layouts

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, StackCard
│   └── sections/        # Hero, About, Skills, Experience, Contact, Projects
├── css/                 # Separated CSS files for each component
├── data/                # Skills, experience, and projects data
├── hooks/               # useScrollReveal, useTheme
<<<<<<< HEAD
├── pages/               # HomePage, ProjectsPage
=======
├── pages/               # HomePage, ProjectsPage, BlogsPage
>>>>>>> 388bcf2ac9aefbc3727189e205741250c1800204
└── styles/              # Global CSS (index.css) and theme constants
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## Author

**Prayagraj Gharia**
- [LinkedIn](https://www.linkedin.com/in/prayagraj-gharia-13000611b/)
- [GitHub](https://github.com/prayaggharia)
- prayag.gharia98@gmail.com
