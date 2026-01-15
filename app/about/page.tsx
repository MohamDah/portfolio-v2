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
          <p className='text-primary-900 text-center text-lg'>Fullstack Developer based in Kigali</p>
        </header>

        <div className='prose prose-lg dark:prose-invert'>

          <section>
            <h2>Background</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit suscipit pellentesque. Ut justo sem, laoreet ut arcu sit amet, fringilla tincidunt orci. Nulla fringilla magna ut vulputate pharetra. Ut nunc ligula, gravida at metus in, porta posuere felis. Aliquam blandit ultrices quam in scelerisque. Aenean consequat erat ut tortor aliquet dapibus. Aliquam erat volutpat. </p>
          </section>
          <section>
            <h2>Technical Expertise</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit suscipit pellentesque. Ut justo sem, laoreet ut arcu sit amet, fringilla tincidunt orci. Nulla fringilla magna ut vulputate pharetra. Ut nunc ligula, gravida at metus in, porta posuere felis. Aliquam blandit ultrices quam in scelerisque. Aenean consequat erat ut tortor aliquet dapibus. Aliquam erat volutpat. </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul>
          </section>
          <section>
            <h2>Approach</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit suscipit pellentesque. Ut justo sem, laoreet ut arcu sit amet, fringilla tincidunt orci. Nulla fringilla magna ut vulputate pharetra. Ut nunc ligula, gravida at metus in, porta posuere felis. Aliquam blandit ultrices quam in scelerisque. Aenean consequat erat ut tortor aliquet dapibus. Aliquam erat volutpat. </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul>
          </section>
          <section>
            <h2>Let&apos;s Connect</h2>
            <p>I&apos;m always interested in taking on new challenges and collaborating on interesting projects. If you&apos;re looking for a developer who can help bring your ideas to life, feel free to reach out.</p>
          </section>
        </div>
      </article>

    </main>
  )
}
