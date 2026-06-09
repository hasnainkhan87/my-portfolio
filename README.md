# Mohammad Hasnain Khan — Personal Portfolio

A premium personal portfolio website built with React + Vite + Tailwind CSS + Framer Motion.

## Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons

## Design

- **Background:** Warm Ivory `#F7F4ED`
- **Primary Accent:** Deep Olive `#556B2F`
- **Secondary Accent:** Muted Gold `#B59A5B`
- **Text:** Charcoal `#2B2B2B`
- **Headings:** Playfair Display
- **Body:** Inter

## Project Structure

```
hasnain-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── assets/images/        # All photos
│   ├── components/
│   │   ├── sections/         # Hero, Journey, Leadership, Projects, Skills, Achievements, Contact
│   │   └── ui/               # Navbar, Footer, FadeUp, SectionHeader
│   ├── data/index.js         # All portfolio content (easy to update)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Setup & Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click Deploy ✓

## Updating Content

All content lives in `src/data/index.js`. To update:
- Change personal info → `personal` object
- Add/edit projects → `projects` array
- Add achievements → `achievements` array
- Edit journey timeline → `journey` array

## Adding MolecuLens Screenshots Later

Place screenshot images in `src/assets/images/` and import them in `src/assets/images/index.js`, then reference them in the Projects section.
