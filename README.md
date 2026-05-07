# Sourav Nayak — Portfolio

Personal portfolio site for Sourav Prakash Nayak. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

[![CI](https://github.com/souravpn/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/souravpn/portfolio/actions/workflows/ci.yml)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS v4
- **Animation**: Framer Motion, Lenis (smooth scroll)
- **Email**: Nodemailer via Gmail SMTP
- **Theming**: next-themes (dark/light)

## Project Structure

```
app/
  page.tsx                   # Thin page shell — imports and composes all sections
  layout.tsx                 # Root layout with Lenis smooth scroll + ThemeProvider
  globals.css                # Global styles
  api/
    contact/route.ts         # POST handler — sends email via Nodemailer

components/
  Navigation.tsx             # Top nav bar with theme toggle
  SplashScreen.tsx           # Animated intro (once per session via sessionStorage)
  BackgroundImages.tsx       # Fixed SF cityscape background (day/dark variants)
  BackToTop.tsx              # Floating back-to-top button
  sections/
    HeroSection.tsx          # Multilingual greeting, profile photo, name/bio
    AboutSection.tsx         # Summary, skills, certifications carousel + modal
    ExperienceSection.tsx    # Single-card snap carousel with chevrons/dots
    ContactSection.tsx       # Contact info + form with drag-and-drop attachments
    Footer.tsx               # Branding, quick nav, tech credits

lib/
  data.ts                    # All static data (greetings, experiences, certs, splash) + types

__tests__/
  lib/data.test.ts           # Data integrity — required fields, uniqueness, ordering
  utils/formatBytes.test.ts  # Byte-formatting utility edge cases
  components/
    Navigation.test.tsx      # Nav renders brand, links, theme toggle
    Footer.test.tsx          # Footer links, badges, copyright year

e2e/
  fixtures.ts                # Custom Playwright fixture (suppresses splash screen)
  home.spec.ts               # Page load, heading, nav, profile image
  navigation.spec.ts         # Scroll-to-section, anchor offset correctness
  experience.spec.ts         # Carousel chevrons, dots, card transitions
  about.spec.ts              # Cert carousel, modal open/close
  contact.spec.ts            # Form fields, validation, drop zone

public/
  profile.png
  sf-day-bg.png              # Light mode cityscape background
  sf-dark-bg.png             # Dark mode cityscape background
  csm.png                    # Certified Scrum Master badge
  ckad.png                   # Certified Kubernetes Application Developer badge
  lean6s-black.png           # Lean 6 Sigma Black Belt badge
  lean6s-green.png           # Lean 6 Sigma Green Belt badge
  lean6s-yellow.png          # Lean 6 Sigma Yellow Belt badge
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local`:

```
GMAIL_USER=your@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

The app password is generated at myaccount.google.com → Security → App Passwords (requires 2FA).

## Testing

### Unit tests (Vitest + React Testing Library)

```bash
npm test              # run once
npm run test:watch    # watch mode
npm run test:coverage # with coverage report
```

### E2E tests (Playwright)

```bash
npm run test:e2e        # headless Chromium
npm run test:e2e:ui     # interactive Playwright UI
npm run test:e2e:debug  # step-through debugger
```

Playwright starts the dev server automatically via `webServer` config.

### Other checks

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # ESLint + Next.js rules
npm run build       # production build
```

## CI/CD

Every push and pull request to `main` runs a two-gate GitHub Actions pipeline:

```
push / PR
    │
    ▼
 unit (ubuntu-latest)
  ├─ typecheck
  ├─ lint
  ├─ vitest unit tests
  └─ next build
         │
         ▼ (only if unit passes)
 e2e (ubuntu-latest)
  └─ playwright (chromium)
       ├─ page load & navigation
       ├─ experience carousel
       ├─ certifications modal
       └─ contact form
```

On failure, the Playwright HTML report is uploaded as a workflow artifact (retained 7 days).

Vercel deploys automatically on merge to `main` after all CI gates pass.

## Features

- Animated splash screen (plays once per browser session)
- Multilingual rotating greeting in the hero
- SF Bay Area cityscape fixed background (separate day/dark images)
- Experience section: single-card snap carousel with chevrons and scroll dots
- Certifications: 3-visible carousel with modal on click
- Contact form: drag-and-drop file attachments, delivered via Nodemailer
- Fully responsive, dark/light mode
