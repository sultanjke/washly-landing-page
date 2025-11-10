<div align="center">

# Washly Landing Page

Marketing site for Washly — an on-demand car wash platform — built with Next.js 16, Tailwind CSS 4.

[Production Live](https://washly.kz)

</div>

## ✨ Overview

Washly Landing is a production-ready marketing site that introduces the consumer app and partner platform. It includes animated sections, pricing tables, partner onboarding flows, and a theme toggle that switches both UI palette and copy.

- **Framework:** Next.js App Router, React 19, TypeScript
- **Styling & Theming:** Tailwind CSS v4, CSS custom properties, next-themes
- **UI Toolkit:** Radix UI primitives, lucide-react icons, motion-driven interactions
- **DX:** pnpm, ESLint 9, TypeScript 5, PostCSS 8

## 🚀 Features

- Responsive hero, feature highlights, pricing, and download sections
- Dedicated partner funnel with stats, testimonials, and lead capture form
- Light/dark theme toggle that adapts colors, imagery, and footer messaging
- Scroll-triggered reveals and motion-enhanced cards
- Accessible UI components (buttons, inputs, hover previews, spinners)
- Preloaded custom typography (Yandex Sans) and optimized assets

## 🧱 Project Structure

```
app/               # App Router entry points and layout
components/        # Page sections and reusable UI primitives
	partners/        # Partner-specific sections mirroring the main funnel
	ui/              # Shared design system pieces (button, hover effects, etc.)
lib/utils.ts       # Utility helpers (classnames, etc.)
public/            # Static assets (logos, badges, theme icons, imagery)
styles/globals.css # Tailwind base layer + CSS variables for theming
```

## 🛠️ Getting Started

Install dependencies:

```bash
pnpm install
```

Run the local development server:

```bash
pnpm dev
# http://localhost:3000
```

Lint the project:

```bash
pnpm lint
```

Create a production build:

```bash
pnpm build
pnpm start
```

## 🎨 Theming

- Tailwind is configured for `class`-based dark mode (`tailwind.config.js`).
- `ThemeProvider` from `next-themes` wraps the app layout and toggles the `dark` class on `<html>`.
- UI surfaces read from CSS variables defined in `app/globals.css` for seamless palette switching.
- The header toggle (`components/theme-toggle.tsx`) swaps logos and updates footer copy between “Humans on Earth” (light) and “Reptiloids on Mars” (dark).

## 📦 Available Scripts

| Command        | Purpose                     |
|----------------|-----------------------------|
| `pnpm dev`     | Start the dev server        |
| `pnpm build`   | Create a production bundle  |
| `pnpm start`   | Serve the production build  |
| `pnpm lint`    | Run ESLint across the repo  |

## 📄 Deployment

Deployments are currently handled through Vercel. Push to `main` (or deploy manually via the Vercel dashboard) to publish changes.

## 🤝 Contributing

1. Fork the repo and create a feature branch.
2. Install dependencies with `pnpm install`.
3. Run `pnpm lint` before submitting a PR.

## 📬 Support

Questions or partnership inquiries? Reach out at [support@washly.kz](mailto:support@washly.kz).

---

Built with ❤️ for the Washly community.
