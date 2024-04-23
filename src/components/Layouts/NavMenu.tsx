"use client"

import { NavbarItem, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export interface NavMenuProps {
  menu: {
    href: string
    title: string
  }[]
}

export function NavMenu({ menu }: NavMenuProps) {
  const pathname = usePathname()

  return (
    <>
      {menu.map(item => {
        const isActive= pathname === item.href
        return (
          <NavbarItem isActive={isActive}  key={item.href}>
            <Link
              color={isActive ? undefined : 'foreground'}
              aria-current={isActive ? 'page' : undefined}
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarItem>
        )
      })}
    </>
  )
}
