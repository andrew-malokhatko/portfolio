import { LucideIcon } from "lucide-react"
import Link from "next/link";

interface IconButtonProps {
    Icon: LucideIcon;
    href: string;
}

const IconButton = ({Icon, href}: IconButtonProps) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank" className="p-2 focus:outline-none">
      <Icon className="stroke-gray-400 hover:stroke-white" size={20} />
    </Link>
  )
}

export default IconButton
