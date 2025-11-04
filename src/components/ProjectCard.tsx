import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import PROJECTS from "@/data/projects";

const ProjectCard = ({ project }: { project: typeof PROJECTS[number]}) => {
  return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
            >
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

              <div className="text-main-foreground font-base mt-5">
                <h2 className="font-heading text-xl sm:text-2xl">
                  {project.name}
                </h2>

                <p className="mt-2">{project.description}</p>

                <div className="mt-8 grid grid-cols-2 gap-5 has-[a:is(:only-child)]:grid-cols-1">
                  {project.liveLink && (
                    <a
                      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                      href={project.liveLink}
                      target="_blank"
                    >
                      Visit
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                      href={project.repoUrl}
                      target="_blank"
                    >
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
}

export default ProjectCard;
