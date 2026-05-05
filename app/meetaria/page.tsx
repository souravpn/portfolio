// app/meetaria/page.tsx
// Add this file to your Next.js app router (assuming your portfolio uses app/ directory like the ARIA project)
// Also create app/meetaria/layout.tsx if you want custom metadata, or just use the root layout.

import { Metadata } from 'next';
import MeetARIAContent from './MeetARIAContent';

export const metadata: Metadata = {
  title: 'A.R.I.A | Sourav Nayak',
  description: 'Meet A.R.I.A — Adaptive Reasoning Intelligence Assistant. Voice-first AI built on Claude.',
};

export default function MeetARIAPage() {
  return <MeetARIAContent />;
}