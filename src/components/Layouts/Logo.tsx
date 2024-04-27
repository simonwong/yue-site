import Image from "next/image";

export const Logo = () => (
  <Image
    src="/logo.png"
    alt="Simon Logo"
    className="dark:invert"
    width={24}
    height={24}
    priority
  />
)
