'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly aria-label="Toggle theme" size="sm">
          <Sun size="16" className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon size="16" className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu onAction={key => setTheme(key as string)} aria-label="Toggle Theme Actions">
        <DropdownItem key='light'>
          Light
        </DropdownItem>
        <DropdownItem key='dark'>
          Dark
        </DropdownItem>
        <DropdownItem key='system'>
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
