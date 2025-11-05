'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      type="button"
    >
      <Sun className="stroke-main-foreground hidden size-4 sm:size-6 dark:inline" aria-hidden="true" />
      <Moon className="stroke-main-foreground inline size-4 sm:size-6 dark:hidden" aria-hidden="true" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
