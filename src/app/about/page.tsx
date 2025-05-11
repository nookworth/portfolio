import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I began a new career path in software engineering in 2023 after
          several years as a piano teacher and typist. I bring the discipline
          and curiosity of a classically trained musician 🎶to my software
          engineering work.
        </p>
      </div>

      <Skills />
      <Experience />
    </div>
  )
}
