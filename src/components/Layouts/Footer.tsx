import { Divider } from "@nextui-org/react"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer
      className="mx-auto max-w-[1024px] py-4 px-6"
    >
      <Divider />
      <div className="flex justify-center pt-4">
        <div>
          Copyright © 2019-{new Date().getFullYear()} Simon Wong.
        </div>
      </div>
    </footer>
  )
}

export default Footer
