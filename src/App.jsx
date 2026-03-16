import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import ScrollSection from "./components/ScrollSection";
import ProcessSection from "./components/ProcessSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main className="bg-[#080808] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Marquee />
      <ScrollSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
