import { MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen p-16 mb-40">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="flex items-end gap-2 text-pretty wrap-break-word text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
            Hi, I&apos;m Mohamed!
          </h1>
          <p className="flex items-center gap-1 text-sm">
            <MapPin size={12} />
            Kigali
          </p>
        </div>

        <h2 className="text-pretty sm:text-lg lg:text-xl">I build full-stack web applications with TypeScript, specializing in <strong>Next.js</strong> and <strong>SvelteKit</strong>.</h2>

        <p className="prose sm:text-lg text-primary text-justify">I develop clean, performant solutions that solve real business problems. My work spans from crafting intuitive user interfaces to designing scalable backend systems. Check out my projects below to see how I&apos;ve helped companies ship better products faster.</p>
      </div>
    </main>
  );
}
