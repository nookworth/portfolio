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
  SiPython,
  SiFastapi,
  SiExpress,
  SiGooglecloud,
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
        { skill: 'firebase', icon: SiFirebase },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'node.js',
          icon: SiNodedotjs,
        },
        {
          skill: 'express.js',
          icon: SiExpress
        },
        {
          skill: 'python',
          icon: SiPython
        },
        {
          skill: 'fastapi',
          icon: SiFastapi
        },
        {
          skill: 'ruby on rails',
          icon: SiRubyonrails,
        },
        {
          skill: 'google cloud',
          icon: SiGooglecloud
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ],
    },
  ]

export default SKILLS
