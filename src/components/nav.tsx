'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './theme-switcher'
import clsx from 'clsx'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/work',
      text: 'Work',
    },
  ]

  return (
    <header className="fixed top-5 left-0 z-50 w-full">
      <nav
        aria-label="Main navigation"
        className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 mx-auto flex w-max gap-5 border-2 p-2.5 px-5 text-sm sm:text-base"
      >
        {links.map((link) => {
          const isActive = path === link.path
          return (
            <Link
              key={link.path}
              className={clsx(
                'hover:border-border rounded-base border-2 px-2 py-1 transition-colors',
                isActive ? 'border-border' : 'border-transparent',
              )}
              href={link.path}
              aria-current={isActive ? 'page' : undefined}
            >
              {link.text}
            </Link>
          )
        })}
        <ThemeSwitcher />
      </nav>
    </header>
  )
}
