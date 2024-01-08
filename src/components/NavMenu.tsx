import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export interface NavMenuProps {
  menu: {
    href: string
    title: string
  }[]
}

export function NavMenu({ menu }: NavMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map(item => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              key={item.href}
              href={item.href}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
