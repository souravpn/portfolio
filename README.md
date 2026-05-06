# Sourav Nayak — Portfolio

Personal portfolio site for Sourav Prakash Nayak. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

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

## Features

- Animated splash screen (plays once per browser session)
- Multilingual rotating greeting in the hero
- SF Bay Area cityscape fixed background (separate day/dark images)
- Experience section: single-card snap carousel with chevrons and scroll dots
- Certifications: 3-visible carousel with modal on click
- Contact form: drag-and-drop file attachments, delivered via Nodemailer
- Fully responsive, dark/light mode
