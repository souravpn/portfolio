"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import "./globals.css";
import { ThemeProvider } from "next-themes";
// import SplashScreen from "@/components/SplashScreen";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
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
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* <SplashScreen /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
