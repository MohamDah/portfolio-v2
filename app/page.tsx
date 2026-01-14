'use client'
import BodyWrapper from "./components/home/BodyWrapper";
import HeroSection from "./components/home/HeroSection";
import TechnologiesSection from "./components/home/Technologies";
import AnimatedLine from "./components/ui/AnimatedLine";
import ProjectsSection from "./components/home/Projects";
import ContactFormSection from "./components/home/ContactForm";

export default function Home() {

  

  return (
    <main className="min-h-screen p-10 sm:p-16 ">
      <HeroSection />

      <BodyWrapper>
        <TechnologiesSection />
        <AnimatedLine />
        <ProjectsSection />
        <AnimatedLine />
        <ContactFormSection />
      </BodyWrapper>
    </main >
  );
}
