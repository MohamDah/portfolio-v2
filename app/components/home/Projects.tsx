import Link from 'next/link'
import React from 'react'

export default function ProjectsSection() {
  const projects = [
    { name: 'SwiftQ', link: '/projects/swiftq' },
    { name: 'Ottri Cleaning Services', link: '/projects/ottri' }
  ]
  
  return (
    <section className="py-12">
      <h2 className="pb-4 text-3xl font-bold">Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.name} className="transition-transform hover:text-accent-foreground group w-fit hover:translate-x-1.5 hover:font-bold hover:italic">
            <span className="group-hover:hidden">•</span>
            <span className="hidden group-hover:inline-block">»</span>
            <Link href={project.link} className="ml-2.5">{project.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
