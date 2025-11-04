'use client'

import { useState } from 'react';
import PROJECTS from '@/data/projects'
import ProjectCard from '@/components/projectCard'

export default function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Work</h1>
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return <ProjectCard project={project} key={id} />
        })}
      </div>
    </div>
  )
}
