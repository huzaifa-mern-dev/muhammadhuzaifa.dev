/**
 * app/page.tsx — Home Page (Server Component)
 *
 * Phase 6: UI/UX Polish pass.
 * - Hero: dot-pattern background (tech/agency feel), bigger responsive type
 * - Status badge: contrast-safe in both modes
 * - CTA buttons: prominent hover lift + shadow in light mode
 */

// ── Phase 3: Server Components ───────────────────────────────────────────
import ServicesSection  from "@/components/sections/ServicesSection";
import ResumeSection    from "@/components/sections/ResumeSection";

// ── Phase 4: Interactive Client Components ───────────────────────────────
import PortfolioSection from "@/components/sections/PortfolioSection";
import SkillsSection    from "@/components/sections/SkillsSection";
import ContactSection   from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

// ── Phase 5+: Hero animations + typewriter ───────────────────────────────
import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <main>
      {/* ─── Spacer for fixed navbar ───────────────────────────────── */}
      <div className="h-20" aria-hidden="true" />

      {/* ─── Hero / About ─────────────────────────────────────────── */}
      <HeroSection />

       {/* ─── Skills (Server Component — CSS Marquee) ──────────────── */}
      <SkillsSection />

      {/* ─── Services (Server Component) ───────────────────────────── */}
      <ServicesSection />

      {/* ─── Resume (Server Component) ─────────────────────────────── */}
      <ResumeSection />

      {/* ─── Portfolio (Client Component — Swiper + Lightbox) ─────── */}
      <PortfolioSection />

      {/* ─── Testimonials "Wall of Love" (Client Component) ───────── */}
      <TestimonialsSection />

      {/* ─── Contact (Client Component — Server Action) ───────────── */}
      <ContactSection />
    </main>
  );
}
