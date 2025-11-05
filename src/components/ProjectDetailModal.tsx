import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import PROJECTS from '@/data/projects'
import type { Dispatch, SetStateAction } from 'react'

const ProjectDetailModal = ({
  open,
  project,
  setOpenModal,
}: {
  open: boolean
  project: (typeof PROJECTS)[number]
  setOpenModal: Dispatch<SetStateAction<string | null>>
}) => (
  <Dialog open={open}>
    <DialogTrigger asChild>
      <Button
        className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY w-full cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
        onClick={() => setOpenModal(project.name)}
        aria-label={`View details for ${project.name}`}
      >
        Details
      </Button>
    </DialogTrigger>
    <DialogContent
      className="*:has-[svg]:hidden sm:max-w-lg"
      onEscapeKeyDown={() => setOpenModal(null)}
      onInteractOutside={() => setOpenModal(null)}
      onPointerDownOutside={() => setOpenModal(null)}
    >
      <DialogHeader>
        <DialogTitle>{project.name}</DialogTitle>
      </DialogHeader>
      <article className="-mx-6 max-h-[750px] overflow-y-auto px-6 text-sm">
        <h2 className="mb-4 text-lg leading-none font-medium">
          Project Details
        </h2>

        <div className="space-y-4">
          <section aria-labelledby="overview-heading">
            <h3 id="overview-heading" className="mb-1 font-semibold">
              Overview
            </h3>
            <p>{project.blurb}</p>
          </section>

          <section aria-labelledby="role-heading">
            <h3 id="role-heading" className="mb-1 font-semibold">
              Role
            </h3>
            <p>{project.role}</p>
          </section>

          {project.story && (
            <section aria-labelledby="story-heading">
              <h3 id="story-heading" className="mb-1 font-semibold">
                Behind the Scenes
              </h3>
              <p>{project.story}</p>
            </section>
          )}

          <section aria-labelledby="stack-heading">
            <h3 id="stack-heading" className="mb-1 font-semibold">
              Tech Stack
            </h3>
            <ul className="flex flex-wrap gap-2" role="list">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="bg-secondary-background border-border rounded-base border-2 px-2 py-1 text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
      <DialogFooter>
        <DialogClose asChild>
          <Button
            onClick={() => setOpenModal(null)}
            aria-label="Close project details dialog"
          >
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

export default ProjectDetailModal
