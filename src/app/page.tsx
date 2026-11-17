import { Atmosphere } from "@/components/layout/Atmosphere";
import { FloatingDock } from "@/components/layout/FloatingDock";
import { Footer } from "@/components/layout/Footer";
import { BentoOverview } from "@/components/sections/BentoOverview";
import { Contact } from "@/components/sections/Contact";
import { Credentials } from "@/components/sections/Credentials";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { Hero } from "@/components/sections/Hero";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <div id="top">
      <Atmosphere />
      <FloatingDock />
      <main id="main">
        <Hero />
        <BentoOverview />
        <ProjectShowcase />
        <TechStack />
        <EngineeringPhilosophy />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
