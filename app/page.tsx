
import ServicesSection  from "@/components/sections/ServicesSection";
import ResumeSection    from "@/components/sections/ResumeSection";

import PortfolioSection from "@/components/sections/PortfolioSection";
import SkillsSection    from "@/components/sections/SkillsSection";
import ContactSection   from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <main>
      <div className="h-20" aria-hidden="true" />

      <HeroSection />

      <SkillsSection />

      <ServicesSection />

      <ResumeSection />

      <PortfolioSection />

      <TestimonialsSection />

      <ContactSection />
    </main>
  );
}
