import React, { ReactNode } from 'react'
import AnimatedLine from '../ui/AnimatedLine'

export default function BodyWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="relative flex flex-col justify-center w-full mx-auto z-2 bg-neutral max-w-7xl">
      <div className="absolute w-full h-20 -top-20 bg-linear-to-b from-transparent to-neutral" />
      <AnimatedLine />
      {children}
    </section>
  )
}
