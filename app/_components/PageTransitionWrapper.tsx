'use client'

import { Transition } from '@headlessui/react'

interface PageTransitionWrapperProps {
  children: React.ReactNode
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  return (
    <Transition
      appear
      show={true}
      enter="page-enter"
      enterFrom="page-enter"
      enterTo="page-enter-active"
      leave="page-leave"
      leaveFrom="page-leave"
      leaveTo="page-leave-active"
    >
      <div>
        {children}
      </div>
    </Transition>
  )
}
