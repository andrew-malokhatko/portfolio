import Link from "next/link"
import links from "@/lib/links"

const Navbar = () => {
  return (
    <header className='top-0 w-full flex items-center justify-center gap-12 h-16 backdrop-blur-sm sticky z-50 select-none'>
        <Link href={links.home} className="hover:text-foreground-secondary">home</Link>
        <Link href={links.projects} className="hover:text-foreground-secondary">projects</Link>
        <Link href={links.contact} className="hover:text-foreground-secondary">contact</Link>
    </header>
  )
}

export default Navbar