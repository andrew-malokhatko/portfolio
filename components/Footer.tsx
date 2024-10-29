import IconButton from "./IconButton";
import links from "@/lib/links";
import Link from "next/link";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center mb-32" id="contact">
    <p className="text-sm">Want know more? <Link className="underline hover:text-foreground-secondary" href={links.github}>Contact me</Link></p>
    <div className="flex items-center gap-2">
      <IconButton href={links.github} Icon={Github} />
      <IconButton href={links.linkedin} Icon={Linkedin} />
      <IconButton href={links.mail} Icon={Mail} />
    </div>
  </footer>
  );
};

export default Footer;
