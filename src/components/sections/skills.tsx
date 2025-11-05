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
      <h2 id="skills-heading" className="font-heading mb-8 text-xl sm:text-2xl">
        Skills
      </h2>

      {SKILLS.map((item, id) => {
        return (
          <section key={id} aria-labelledby={`skill-category-${id}`}>
            <ul className="mb-10 flex flex-wrap gap-5 pl-4" role="list">
              <h3
                id={`skill-category-${id}`}
                className="font-heading mb-4 text-lg sm:text-xl"
              >
                {item.field}
              </h3>
              {item.skills.map((skill, skillId) => {
                return (
                  <li key={skillId}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" aria-label={skill.skill}>
                            <skill.icon
                              className="h-8 w-8"
                              title=""
                              aria-hidden="true"
                            />
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
