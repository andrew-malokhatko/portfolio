import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  children?: React.ReactNode;
  RightIcon?: LucideIcon;
}

const Button = ({ href, children, RightIcon }: ButtonProps) => {
  return (
    <Link
      href = {href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 border py-1 text-center font-semibold border-border-dark rounded-md flex items-center gap-2 hover:bg-border-dark transition"
    >
      <span>{children}</span>
      {RightIcon && <RightIcon size={20}/>}
    </Link>
  );
};

export default Button;
