import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <Image
      src="/logo.png"
      alt="Simon Logo"
      className="dark:invert"
      width={24}
      height={24}
      priority
    />
  </Link>
)
