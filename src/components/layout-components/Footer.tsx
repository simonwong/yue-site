import { Logo } from '@/components/layout-components/Logo'
import { Spacer } from '@nextui-org/react'
import { MailIcon } from 'lucide-react'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const Copyright = <div className="text-sm text-gray-400">Copyright © 2019-{new Date().getFullYear()} Simon Wong.</div>

  return (
    <footer
      className="mx-auto max-w-[1024px] py-4 px-6"
    >
      <div className="sm:flex sm:justify-between">
        <div className='flex flex-col justify-between items-center sm:items-start'>
          <div className='flex gap-1'>
            <Logo />
            <p>Thanks for reading!</p>
          </div>
          <div className='hidden sm:block'>{Copyright}</div>
        </div>
        <div className='mt-4 flex flex-col items-center sm:mt-0 sm:items-start'>
          <p className="text-sm text-gray-400">Contact</p>
          <Spacer y={4} />
          <div className='grid gap-1 text-center sm:text-left'>
            <a className="hover:opacity-70" href="https://github.com/simonwong">Github</a>
            <a className="hover:opacity-70" href="https://twitter.com/wsj_simonwong">Twitter</a>
            <span className='flex items-center gap-1 hover:opacity-70'>
              <MailIcon size={16} />
              <a href="mailto:wsj_simon@163.com">wsj_simon@163.com</a>
            </span>
          </div>
        </div>
        <div className='text-center mt-4 sm:hidden'>{Copyright}</div>
      </div>
    </footer>
  )
}

export default Footer
