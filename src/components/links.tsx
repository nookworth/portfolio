import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string; label: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:chrismorrison1987@gmail.com',
      label: 'Email Christopher Morrison',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/nookworth',
      label: 'View GitHub profile',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/c-morr',
      label: 'View LinkedIn profile',
    },
  ]

  return (
    <nav aria-label="Social media links" className="mt-20 pl-4 mr-auto flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={id}
            href={link.href}
            aria-label={link.label}
          >
            <link.icon title="" aria-hidden="true" />
          </a>
        )
      })}
    </nav>
  )
}
