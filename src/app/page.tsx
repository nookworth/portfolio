import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="font-heading text-2xl sm:text-4xl">
        Christopher Morrison
      </h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Hi, my name is Christopher Morrison, full-stack software engineer
          based in Utah. I strive to build excellent user experiences from solid
          foundations and some of my favorite technologies include React,
          Node.js, and LangGraph.
        </p>
        <br />
      </div>
      <Links />
    </div>
  )
}
