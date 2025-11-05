import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { Dispatch, SetStateAction } from 'react'

const ProjectDetailModal = ({
  name,
  open,
  setOpenModal,
}: {
  name: string
  open: boolean
  setOpenModal: Dispatch<SetStateAction<string | null>>
}) => {
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY w-full cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
          onClick={() => setOpenModal(name)}
        >
          Details
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-lg *:has-[svg]:hidden"
        onEscapeKeyDown={() => setOpenModal(null)}
        onInteractOutside={() => setOpenModal(null)}
        onPointerDownOutside={() => setOpenModal(null)}
      >
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          {/* <DialogDescription>
            This is a dialog with scrollable content.
          </DialogDescription> */}
        </DialogHeader>
        <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
          <h4 className="mb-4 text-lg leading-none font-medium">Lorem Ipsum</h4>
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
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
