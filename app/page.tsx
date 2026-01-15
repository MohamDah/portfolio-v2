'use client'
import BodyWrapper from "./_components/home/BodyWrapper";
import HeroSection from "./_components/home/HeroSection";
import TechnologiesSection from "./_components/home/Technologies";
import AnimatedLine from "./_components/ui/AnimatedLine";
import ProjectsSection from "./_components/home/Projects";
import ContactFormSection from "./_components/home/ContactForm";

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
