import {
  type IconType,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRubyonrails,
  SiTailwindcss,
  SiTypescript,
  SiUnocss,
  SiApollographql,
  SiReactrouter,
  SiElectron,
  SiFirebase,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html 5', icon: SiHtml5 },
        { skill: 'css 3', icon: SiCss3 },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'electron', icon: SiElectron },
        { skill: 'react', icon: SiReact },
        { skill: 'apollo graphql', icon: SiApollographql },
        { skill: 'tailwindcss', icon: SiTailwindcss },
        { skill: 'unocss', icon: SiUnocss },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'react router', icon: SiReactrouter },
        { skill: 'firebase', icon: SiFirebase },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'ruby on rails',
          icon: SiRubyonrails,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ],
    },
  ]

export default SKILLS
