import projects from '@/app/_data/projects'
import AnimatedLine from '@/app/_components/ui/AnimatedLine'
import { ExternalLink, HandshakeIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params
  const project = projects.find(p => p.id === projectId)

  if (!project) return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-xl">Not Found</h2>
    </div>
  )

  return (
    <main className="max-w-6xl min-h-screen p-10 px-6 mx-auto sm:p-16 md:px-12 lg:px-24">
      <div className='py-8'>
        {/* Header */}
        <div className='flex justify-between items-start'>
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">{project.name}</h1>
          <Link href={'/'}>
            <XIcon className='text-primary-900/70 hover:text-primary-100 hover:scale-110 transition-all' />
          </Link>
        </div>

        {/* Meta Section */}
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-primary-900/30 hover:bg-primary-900/50">
            <HandshakeIcon className='size-5' />
            {project.meta.kind}
          </span>

          {project.meta.url && (
            <a
              href={project.meta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors rounded-lg bg-primary-900/30 hover:bg-primary-900/50 hover:underline"
            >
              <ExternalLink className='size-5' />
              {project.name}
            </a>
          )}
        </div>

        {/* Technologies Section */}
        <div className="mb-8">
          <h2 className="mb-3 text-sm font-semibold">Technologies:</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-lg bg-primary-900/30 hover:bg-primary-900/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <AnimatedLine />

        {/* Description */}
        <div className="mt-10 max-w-none">
          <p className="leading-loose whitespace-pre-line">
            {project.description}
          </p>
        </div>

        <div className='py-12 flex flex-col items-center'>
          <Link href={'/'} className='opacity-50 transition-opacity hover:opacity-100 text-lg'>Home</Link>
        </div>
      </div>
    </main>
  )
}
