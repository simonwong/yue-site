import React from 'react'
import { Logo } from '@/components/layout-components/Logo'
import { NavMenuList } from '@/components/layout-components/NavMenu'
import { ThemeSwitcher } from '@/components/layout-components/ThemeSwitcher'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuToggle } from '@nextui-org/react'
import { Github } from 'lucide-react'

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuList = [
    { href: '/', title: '首页' },
    { href: '/blog', title: '博客' },
    { href: '/about', title: '关于' },
  ]

  const BrandNode = (
    <NavbarBrand>
      <Logo />
    </NavbarBrand>
  )

  return (
    <Navbar position="static">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {BrandNode}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavMenuList menu={menuList} type='nav' />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button isIconOnly aria-label="Github" className='mr-2' size="sm">
          <a target="_blank" href="https://github.com/simonwong">
            <Github size="16" />
          </a>
        </Button>
        <ThemeSwitcher />
      </NavbarContent>
      <NavbarMenu>
        <NavMenuList menu={menuList} type='menu' />
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
