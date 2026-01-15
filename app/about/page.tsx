import React from 'react'
import pfp from '@/public/images/pfp.png'
import Image from 'next/image'
import Link from 'next/link'
import { XIcon } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="max-w-4xl min-h-screen px-6 py-10 mx-auto sm:py-16 md:px-12 lg:px-24">
      <div className='flex justify-end'>
        <Link href={'/'}>
          <XIcon className='text-primary-900/70 hover:text-primary-100 hover:scale-110 transition-all' />
        </Link>
      </div>
      <article className='py-11'>
        <header className='mb-12'>
          <div className='w-56 mx-auto mb-14 overflow-hidden rounded-full border-3'>
            <Image src={pfp} alt="profile picture" className='w-full' />
          </div>
          <h1 className='mb-4 text-4xl font-bold text-center'>About Mohamed Dahab</h1>
          <p className='text-primary-900 text-center text-lg'>Full-Stack Developer based in Kigali</p>
        </header>

        <div className='prose prose-lg dark:prose-invert'>

          <section>
            <h2>Background</h2>
            <p>I&apos;m a full-stack developer with a strong focus on building practical, user-centered web applications. My journey into software development has been shaped by hands-on experience across startups, real products, and collaborative learning environments like The Gym Rwanda and African Leadership University. I enjoy turning ideas into well-structured, reliable software and continuously improving both my technical skills and the way I approach problems.</p>
          </section>
          <section>
            <h2>Technical Expertise</h2>
            <p>I specialize in modern web development, with a strong foundation in frontend engineering and growing experience in backend systems. I enjoy working with scalable architectures, clean codebases, and tools that improve developer experience and long-term maintainability.</p>
            <ul>
              <li>React, Next.js, TypeScript, Tailwind CSS</li>
              <li>State management (Zustand, Context API, TanStack Query)</li>
              <li>REST APIs, Firebase, NestJS</li>
              <li>Responsive design, performance optimization, and UI architecture</li>
            </ul>
          </section>
          <section>
            <h2>Approach</h2>
            <p>I value clarity, simplicity, and long-term thinking in the way I build software. I aim to write code that is easy to understand, easy to maintain, and genuinely useful to the people who interact with it.</p>
            <ul>
              <li>Focus on real user needs and clean UX</li>
              <li>Strong collaboration with designers and backend developers</li>
              <li>Iterative improvement through feedback and testing</li>
            </ul>
          </section>
          <section>
            <h2>Let&apos;s Connect</h2>
            <p>I&apos;m always open to discussing new projects, opportunities, or ideas. Whether it&apos;s building a product, improving an existing system, or collaborating with other developers. Feel free to reach out if you&apos;d like to work together or just have a conversation.</p>
          </section>
        </div>
      </article>

    </main>
  )
}
