import React, { ReactNode } from 'react'

export default function BodyWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="relative flex flex-col justify-center w-full mx-auto z-2 bg-neutral pb-180 max-w-7xl">
      <div className="absolute w-full h-20 -top-20 bg-linear-to-b from-transparent to-neutral" />
      <div className="h-px bg-primary-900/50 animate-[expandWidth_1s_ease-in-out_2s_forwards] w-0" />
      {children}
    </section>
  )
}
