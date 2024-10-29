import { StaticImageData } from "next/image";

import ElfProjectImage from "@/public/ProjectElf.png"
import PortfolioProjectImage from "@/public/ProjectPortfolio.png"

interface Project {
    name: string,
    description: string,
    image: StaticImageData,
    link: string,
    technologies?: string[], 
}

const projects: Project[] = [
    {
        name: "Elf Messenger",
        description: "Real-time messenger with two-sided encryption. Designed and implemented using Next.js Framework and MongoDB Database.",
        image: ElfProjectImage,
        technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Socket.io"],
        link: "https://github.com/andrew-malokhatko/elf"
    },
    {
        name: "Elf1",
        description: "A web messenger app with two-sided encryption designed and implemented using Next.js Framework and MongoDB Database.",
        image: PortfolioProjectImage,
        technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Socket.io"],
        link: "https://github.com/andrew-malokhatko/elf"
    },
    {
        name: "Elf2",
        description: "A web messenger app with two-sided encryption designed and implemented using Next.js Framework and MongoDB Database.",
        image: PortfolioProjectImage,
        technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Socket.io"],
        link: "https://github.com/andrew-malokhatko/elf"
    }
];

export default projects;
