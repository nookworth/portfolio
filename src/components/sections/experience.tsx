import PAST_ROLES from '@/data/experience'

export default function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="mb-16">
      <h2 id="experience-heading" className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>

      {PAST_ROLES.map((role, id) => {
        return (
          <article className="mb-8" key={id}>
            <h3 className="text-lg font-heading sm:text-xl">
              {role.role} @ {role.company}
            </h3>

            <p className="mb-4 mt-0.5 text-sm">
              <time dateTime={role.startDate}>{role.startDate}</time> - <time dateTime={role.endDate}>{role.endDate}</time>
            </p>
            <p>{role.description}</p>
          </article>
        )
      })}
    </section>
  )
}
