import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import ProjectDetailModal from './ProjectDetailModal'
import PROJECTS from '@/data/projects'
import { useState } from 'react'

const ProjectCard = ({ project }: { project: (typeof PROJECTS)[number] }) => {
  const [openModal, setOpenModal] = useState<string | null>(null)
  return (
    <article className="border-border shadow-shadow rounded-base bg-main space-y-2 border-2 p-4 sm:p-5">
      <AspectRatio
        className="border-border shadow-shadow rounded-base -bottom-[2px]! h-fit max-h-full truncate border-2"
        ratio={71 / 26}
      >
        <img
          className="rounded-base w-full"
          src={`${project.previewImage}`}
          alt={`Preview of ${project.name}`}
        />
      </AspectRatio>

      <header className="text-main-foreground font-base min-h-21">
        <h3 className="font-heading text-lg">{project.name}</h3>
        <p>{project.blurb}</p>
      </header>

      <footer className="mx-auto w-fit min-w-1/2">
        <ProjectDetailModal
          open={openModal === project.name}
          project={project}
          setOpenModal={setOpenModal}
        />
      </footer>
    </article>
  )
}

export default ProjectCard
