import { NavMenu } from '@/components/Layouts/NavMenu'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import { Github } from 'lucide-react'
import Image from 'next/image'

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
        {/* <ModeToggle client:load /> */}
      </NavbarContent>
      {/* <header
        className="mx-auto flex max-w-4xl items-center justify-between gap-5 pt-8 font-medium text-gray-600"
      >
        <nav className="mix-blend-luminosity">
        </nav>

        <div className="flex">


        </div>
      </header> */}
    </Navbar>
  )
}

export default Header
