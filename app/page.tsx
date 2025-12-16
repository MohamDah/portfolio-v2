'use client'
import BodyWrapper from "./components/home/BodyWrapper";
import HeroSection from "./components/home/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen p-10 sm:p-16 ">
      <HeroSection />

      <BodyWrapper>
        <section className="py-12">
          <h2 className="pb-4 text-3xl font-bold">Technologies</h2>
        </section>
      </BodyWrapper>

    </main >
  );
}
