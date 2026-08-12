# Landing Page – SDE-1 Technical Assignment

A responsive landing page recreated from the provided Figma design as part of the SDE-1 technical assignment.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Features

- Pixel-accurate implementation of the provided Figma design
- Fully responsive across desktop, tablet, and mobile devices
- Responsive navigation with mobile hamburger menu
- Reusable and modular React components
- JSON-driven page content
- Server Components by default
- Optimized images using Next.js `Image`
- Semantic HTML and accessible navigation
- Clean separation of content, presentation, and application logic

## Project Structure

```text
app/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── layout/
├── reusabels/
└── sections/

data/
├── navigation.json
└── ...

public/
├── images/
└── icons/
