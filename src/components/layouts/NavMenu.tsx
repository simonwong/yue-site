"use client"

import { NavbarItem, Link, NavbarMenuItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export interface NavMenuProps {
  menu: {
    href: string
    title: string
  }[],
  type: 'nav' | 'menu'
}

export function NavMenuList({ menu, type }: NavMenuProps) {
  const pathname = usePathname()

  const ItemNode = type === 'nav' ? NavbarItem : NavbarMenuItem

  return (
    <>
      {menu.map(item => {
        const isActive= pathname === item.href
        return (
          <ItemNode isActive={isActive}  key={item.href}>
            <Link
              color={isActive ? undefined : 'foreground'}
              aria-current={isActive ? 'page' : undefined}
              href={item.href}
              className={type === 'menu' ? "w-full" : undefined}
              size={type === 'menu' ? "lg" : undefined}
            >
              {item.title}
            </Link>
          </ItemNode>
        )
      })}
    </>
  )
}

