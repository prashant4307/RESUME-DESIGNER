# ResumeForge

A fast, modern resume builder built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. Create resumes using multiple templates, preview in real time, and export to PDF or PNG.

## Tech Stack

- Vite
- React + TypeScript
- Tailwind CSS
- shadcn/ui

## Getting Started

Prerequisites: Node.js and npm (recommended: install via nvm).

```sh
# 1) Install dependencies
npm install

# 2) Start the dev server
npm run dev

# 3) Build for production
npm run build

# 4) Preview the production build
npm run preview
```

## Project Structure

- `src/pages/Index.tsx`: Landing page
- `src/pages/Builder.tsx`: Main resume builder UI
- `src/components/templates/`: Resume templates (Modern, Professional, Creative)
- `src/index.css`: Global styles and CSS variables
- `tailwind.config.ts`: Tailwind configuration
- `vite.config.ts`: Vite configuration

## Exporting

- PDF export uses html2canvas + jsPDF
- PNG export uses html2canvas

## License

This project does not include a license by default. Add one if needed.
