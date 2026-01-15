import projects from '@/app/_data/projects'
import Link from 'next/link'

export default function ProjectsSection() {
  
  return (
    <section className="py-12">
      <h2 className="pb-4 text-3xl font-bold">Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.name} className="transition-transform hover:text-accent-foreground group w-fit hover:translate-x-1 hover:font-bold hover:italic">
            <span className="group-hover:hidden">•</span>
            <span className="hidden group-hover:inline-block">»</span>
            <Link href={`/projects/${project.id}`} className="ml-2.5">{project.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
