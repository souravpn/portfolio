"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import SplashScreen from "@/components/SplashScreen";
import BackgroundImages from "@/components/BackgroundImages";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <main className="bg-white dark:bg-transparent text-zinc-900 dark:text-white min-h-screen overflow-x-hidden relative">
      <SplashScreen />
      <BackgroundImages />
      <div className="relative z-1 flex flex-col min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
        <BackToTop />
      </div>
    </main>
  );
}
