import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  children?: React.ReactNode;
  RightIcon?: LucideIcon;
  classsName?: string;
}

const Button = ({ href, children, RightIcon, className }: ButtonProps) => {
  return (
    <Link
      href = {href}
      target="_blank"
      rel="noopener noreferrer"
      className={"px-4 py-1 text-center font-semibold rounded-md flex items-center gap-2 transition whitespace-nowrap "+ className}
    >
      {children}
      {RightIcon && <RightIcon size={20}/>}
    </Link>
  );
};

export default Button;
