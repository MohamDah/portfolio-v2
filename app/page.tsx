'use client'
import BodyWrapper from "./components/home/BodyWrapper";
import HeroSection from "./components/home/HeroSection";
import TechnologiesSection from "./components/home/Technologies";
import AnimatedLine from "./components/ui/AnimatedLine";

export default function Home() {
  return (
    <main className="min-h-screen p-10 sm:p-16 ">
      <HeroSection />

      <BodyWrapper>
        <TechnologiesSection />
        <AnimatedLine />

      </BodyWrapper>
    </main >
  );
}
