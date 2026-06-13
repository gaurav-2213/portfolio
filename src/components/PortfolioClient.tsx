"use client";

import { BackToTop } from "@/components/features/BackToTop";
import { LoadingScreen } from "@/components/features/LoadingScreen";
import { ParticleBackground } from "@/components/features/ParticleBackground";
import { ScrollProgressBar } from "@/components/features/ScrollProgressBar";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";

export function PortfolioClient() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" onComplete={handleLoadComplete} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgressBar />
          <ParticleBackground />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </ThemeProvider>
  );
}
