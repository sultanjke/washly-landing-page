# Washly Landing Page

Marketing site for Washly — an on-demand car wash platform — built with Next.js 16, Tailwind CSS 4.

[Production Live](https://washly.kz)

</div>

## Overview

Washly Landing is a production-ready marketing site that introduces the consumer app and partner platform. It includes animated sections, pricing tables, partner onboarding flows, and a theme toggle that switches both UI palette and copy.

- **Framework:** Next.js App Router, React 19, TypeScript
- **Styling & Theming:** Tailwind CSS v4, CSS custom properties, next-themes
- **UI Toolkit:** Radix UI primitives, lucide-react icons, motion-driven interactions
- **DX:** pnpm, ESLint 9, TypeScript 5, PostCSS 8

## Project Structure

```
app/               # App Router entry points and layout
components/        # Page sections and reusable UI primitives
	partners/        # Partner-specific sections mirroring the main funnel
	ui/              # Shared design system pieces (button, hover effects, etc.)
lib/utils.ts       # Utility helpers (classnames, etc.)
public/            # Static assets (logos, badges, theme icons, imagery)
styles/globals.css # Tailwind base layer + CSS variables for theming
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm dev
# http://localhost:3000
```

Create a production build (not recommended for now):

```bash
npm build
npm start
```

## Deployment

Deployments are currently handled through Vercel. Push to `main` (or deploy manually via the Vercel dashboard) to publish changes.

## Support

Questions or partnership inquiries? Reach out at [support@washly.kz](mailto:support@washly.kz).

---

Built with ❤️ for the Washly community.
