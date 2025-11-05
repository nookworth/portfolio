import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import ProjectDetailModal from './ProjectDetailModal'
import PROJECTS from '@/data/projects'
import { useState } from 'react'

const ProjectCard = ({ project }: { project: (typeof PROJECTS)[number] }) => {
  const [openModal, setOpenModal] = useState<string | null>(null)
  return (
    <div className="border-border shadow-shadow rounded-base bg-main border-2 p-4 space-y-2 sm:p-5">
      <AspectRatio
        className="border-border shadow-shadow rounded-base -bottom-[2px]! h-fit max-h-full truncate border-2"
        ratio={71 / 26}
      >
        <img
          className="rounded-base w-full"
          src={`${project.previewImage}`}
          alt={project.name}
        />
      </AspectRatio>

      <div className="text-main-foreground font-base min-h-21">
        <p className="font-heading text-lg">{project.name}</p>
        <p>{project.description}</p>
      </div>

      <div className="mx-auto w-fit min-w-1/2">
          <ProjectDetailModal
            name={project.name}
            open={openModal === project.name}
            setOpenModal={setOpenModal}
          />
        </div>
    </div>
  )
}

export default ProjectCard
