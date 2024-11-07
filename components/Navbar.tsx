import Link from "next/link"

const Navbar = () => {
  return (
    <header className='top-0 w-full flex items-center justify-center gap-12 h-16 backdrop-blur-sm bg-background/100 sticky z-50 select-none'>
        <Link href="/" className="hover:text-foreground-secondary">Home</Link>
        <Link href="/" className="hover:text-foreground-secondary">Projects</Link>
        <Link href="/" className="hover:text-foreground-secondary">Three</Link>
    </header>
  )
}

export default Navbar