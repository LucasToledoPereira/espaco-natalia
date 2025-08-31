# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15 application for "Espaço Natalia", a healthcare/wellness business website migrated from Angular. The site uses 100% Static Site Generation (SSG) for optimal performance and SEO, with Firebase hosting deployment.

## Development Commands
- `pnpm dev` - Start development server at http://localhost:3000
- `pnpm build` - Build for production with SSG
- `pnpm start` - Start production server (after build)
- `pnpm lint` - Run ESLint
- `pnpm deploy:firebase` - Build and deploy to Firebase

## Architecture Overview

### Static Site Generation (SSG)
- Configured with `output: 'export'` in `next.config.ts`
- Generates static HTML files in `out/` directory
- All pages are pre-rendered at build time
- No server-side functionality - pure static site

### Component Structure
All components are in `src/components/`:
- `Header.tsx` - Navigation with smooth scroll to sections
- `About.tsx` - Hero section with company info
- `Services.tsx` - Service descriptions with images
- `Team.tsx` - Team member profiles
- `Gallery.tsx` - Photo gallery of the space
- `Covenants.tsx` - Insurance partners
- `Testimonies.tsx` - Client testimonials
- `Contact.tsx` - Contact information
- `Footer.tsx` - Footer with links and social media
- `WhatsApp.tsx` - WhatsApp contact button

### Styling
- Tailwind CSS 4.0 for styling
- Font Awesome 5.15.4 for icons
- Custom colors: `app-primary` (#55a491), `whats` (#25d366)
- Global styles in `src/app/globals.css`
- Responsive design with mobile-first approach

### Assets
- All assets in `public/assets/`
- Next.js Image component used for optimization
- Images served as static files

### Key Features
- Smooth scrolling navigation
- Fixed WhatsApp floating button
- Responsive design
- SEO-friendly with static generation
- Performance optimized
- Custom 404 page
- Progressive Web App (PWA) ready

### Deployment
- Firebase hosting serves static files from `out/` directory
- Single-page application fallback configured
- Deployment: `pnpm deploy:firebase`

### Package Management
- Uses pnpm for faster dependency management
- Lock file: `pnpm-lock.yaml`
- Specified package manager: `pnpm@8.8.0`

### SEO Optimizations
- Complete Open Graph and Twitter Cards metadata
- Structured data (JSON-LD) for healthcare business
- Semantic HTML5 tags (`<main>`, `<section>`, etc.)
- Optimized meta descriptions and titles
- XML sitemap and robots.txt
- Custom 404 page
- Progressive Web App manifest
- Canonical URLs configured

## Important Notes
- All components are client components due to interactivity
- Event handlers work in development but must be simple for SSG
- Image paths must start with `/` for static export
- No server-side functionality available
- Domain configured for https://espaconatalia.com.br