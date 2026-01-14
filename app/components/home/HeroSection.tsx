import GithubLogo from '@/app/assets/GithubLogo'
import LinkedinLogo from '@/app/assets/LinkedinLogo'
import { MapPin } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='sticky top-12 mx-auto h-full w-full max-w-7xl sm:top-16 hero-fade-in'>
      <div className='relative flex min-h-[calc(100dvh-5rem)] w-full flex-col sm:min-h-[calc(100dvh-8rem)] sm:justify-center sm:py-8'>

        <div className="flex flex-col gap-8">
          <div>
            <h1 className="flex items-end gap-2 text-4xl font-extrabold leading-none tracking-tight text-pretty wrap-break-word md:text-5xl lg:text-6xl">
              Hi, I&apos;m Mohamed Dahab!
            </h1>
            <p className="flex items-center gap-1 text-sm">
              <MapPin size={12} />
              Kigali
            </p>
          </div>

          <h2 className="text-pretty sm:text-lg lg:text-xl">I build full-stack web applications with TypeScript, specializing in <strong>Next.js</strong> and <strong>SvelteKit</strong>.</h2>

          <p className="prose text-justify sm:text-lg text-primary">I develop clean, performant solutions that solve real business problems. My work spans from crafting intuitive user interfaces to designing scalable backend systems. Check out my projects below to see how I&apos;ve helped companies ship better products faster.</p>

          <div className="flex items-center gap-3">
            <a href="#" className='transition-transform hover:scale-110'>
              <GithubLogo className="size-8.5" />
            </a>
            <a href="#" className='transition-transform hover:scale-110'>
              <LinkedinLogo className="size-8.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
