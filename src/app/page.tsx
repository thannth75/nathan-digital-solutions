import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { ProjectsSection } from "@/components/sections/home/ProjectsSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { PricingSection } from "@/components/sections/home/PricingSection";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { ContactSection } from "@/components/sections/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
