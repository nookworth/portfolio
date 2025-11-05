import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import ProjectDetailModal from './ProjectDetailModal'
import PROJECTS from '@/data/projects'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const ProjectCard = ({ project }: { project: (typeof PROJECTS)[number] }) => {
  const [openModal, setOpenModal] = useState<string | null>(null)
  const externalLink = project.liveLink || project.repoUrl
  const linkLabel = project.repoUrl ? 'View repository' : 'View live site'

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

      <footer className="mx-auto flex w-full gap-2">
        <ProjectDetailModal
          open={openModal === project.name}
          project={project}
          setOpenModal={setOpenModal}
        />
        {externalLink && (
          <Button
            asChild
            className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY w-full cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
          >
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${linkLabel} for ${project.name}`}
            >
              {project.liveLink ?'Live Site' : 'Repository'}
            </a>
          </Button>
        )}
      </footer>
    </article>
  )
}

export default ProjectCard
