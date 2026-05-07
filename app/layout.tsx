"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Sourav Nayak — Portfolio</title>
        <meta name="description" content="Personal portfolio of Sourav Prakash Nayak — Senior Software Engineer specialising in React, Next.js, TypeScript, and AI-assisted development." />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
