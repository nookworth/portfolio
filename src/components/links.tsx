import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:chrismorrison1987@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/nookworth',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/chris-morrison-9a185a22/',
    },
  ]

  return (
    <div className="mt-20 mr-auto flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
