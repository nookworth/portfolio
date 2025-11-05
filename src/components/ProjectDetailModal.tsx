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
}) => {
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY w-full cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
          onClick={() => setOpenModal(project.name)}
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
        <div className="-mx-6 max-h-[750px] overflow-y-auto px-6 text-sm">
          <h4 className="mb-4 text-lg leading-none font-medium">
            Project Details
          </h4>

          <div className="space-y-4">
            <div>
              <h5 className="mb-1 font-semibold">Overview</h5>
              <p>{project.blurb}</p>
            </div>

            <div>
              <h5 className="mb-1 font-semibold">Role</h5>
              <p>{project.role}</p>
            </div>

            {project.story && (
              <div>
                <h5 className="mb-1 font-semibold">Behind the Scenes</h5>
                <p>{project.story}</p>
              </div>
            )}

            <div>
              <h5 className="mb-1 font-semibold">Tech Stack</h5>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary-background border-border rounded-base border-2 px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={() => setOpenModal(null)}>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDetailModal
