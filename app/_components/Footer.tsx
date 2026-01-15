import React from 'react'
import AnimatedLine from './ui/AnimatedLine'
import LinkedinLogo from '../_assets/LinkedinLogo'
import GithubLogo from '../_assets/GithubLogo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <AnimatedLine />
      <div className='flex flex-col items-center gap-8 px-10 py-12'>
        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/mohamdah" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">GitHub</span>
            <div className="transition-transform duration-200 hover:scale-105">
              <GithubLogo className='size-10' />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mohamdah/" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">LinkedIn</span>
            <div className="transition-transform duration-200 hover:scale-105">
              <LinkedinLogo className='size-10' />
            </div>
          </a>
        </div>
        <nav className='flex gap-4'>
          <Link href={'/'} className='text-sm hover:underline'>Home</Link>
          <Link href={'/about'} className='text-sm hover:underline'>About</Link>
        </nav>
      </div>
    </footer>
  )
}
