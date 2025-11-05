import SKILLS from '@/data/skills'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="mb-16">
      <h2 id="skills-heading" className="mb-8 text-xl font-heading sm:text-2xl">Skills</h2>

      {SKILLS.map((item, id) => {
        return (
          <section key={id} aria-labelledby={`skill-category-${id}`}>
            <h3 id={`skill-category-${id}`} className="mb-4 text-lg font-heading sm:text-xl">
              {item.field}
            </h3>

            <ul className="mb-10 flex flex-wrap gap-5" role="list">
              {item.skills.map((skill, skillId) => {
                return (
                  <li key={skillId}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" aria-label={skill.skill}>
                            <skill.icon className="h-8 w-8" title="" aria-hidden="true" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>{skill.skill}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </section>
  )
}
