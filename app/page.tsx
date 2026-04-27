import Hero from "@/components/hero";
import DistinctionSection from "@/components/distinction";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import AboutSection from "@/components/about";
import StandardSection from "@/components/standards";
import TestimonialSection from "@/components/testimonial";
import ContactSection from "@/components/contact";
import CapabilitiesSection from "@/components/capabilities";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Hero />
      <DistinctionSection />
      <AboutSection />
      <CapabilitiesSection />
      <StandardSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <AnimatedThemeToggler className="fixed bottom-6 right-6 z-50 rounded-full border border-white/20 bg-white/10 p-3 text-foreground shadow-lg backdrop-blur-md transition hover:bg-white/20 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20" />
    </div>
  );
}
