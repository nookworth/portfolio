'use client'

import PROJECTS from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Work() {
  return (
    <div className="mx-auto w-full max-w-[750px] lg:max-w-[900px]">
      <header>
        <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Work</h1>
      </header>
      <section aria-label="Projects" className="flex flex-col lg:grid lg:grid-cols-2 gap-5 h-full">
        {PROJECTS.map((project, id) => {
          return <ProjectCard project={project} key={id} />
        })}
      </section>
    </div>
  )
}
