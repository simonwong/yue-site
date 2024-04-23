import { NavMenu } from '@/components/Layouts/NavMenu'
import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import { Github } from 'lucide-react'
import Image from 'next/image'
import { ThemeSwitcher } from './ThemeSwitcher'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const menuList = [
    { href: '/', title: '首页' },
    { href: '/blog', title: '博客' },
    { href: '/about', title: '关于' },
  ]
  return (
    <Navbar position="static">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Image
          src="/logo.png"
          alt="Simon Logo"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavMenu menu={menuList} />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button isIconOnly aria-label="Github" className='mr-2'>
          <a target="_blank" href="https://github.com/simonwong">
            <Github size="18" />
          </a>
        </Button>
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  )
}

export default Header
