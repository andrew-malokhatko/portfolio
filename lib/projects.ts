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
        description: "Real-time messenger with two-sided encryption. Implemented using Next.js Framework and MongoDB Database.",
        image: ElfProjectImage,
        technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Socket.io"],
        link: "https://github.com/andrew-malokhatko/elf"
    },
    {
        name: "Portfolio",
        description: "Portfolio website. Also includes TODO list, API connection and games like Connect 4 and Memory Game.",
        image: PortfolioProjectImage,
        technologies: ["Next.js", "React", "TypeScript", "Tailwind", "API", "CSS"],
        link: "https://github.com/andrew-malokhatko/elf"
    },
    {
        name: "Chess Engine",
        description: "Implemented Chess Engine using minimax and alpha-beta pruning algorithms. Coded Chess logic. Learned about chess programmg.",
        image: PortfolioProjectImage,
        technologies: ["Cocos2d-x", "C++"],
        link: "https://github.com/andrew-malokhatko/elf"
    },
    {
        name: "Labyrinth Generator",
        description: "Real-time messenger with two-sided encryption. Designed and implemented using Next.js Framework and MongoDB Database.",
        image: ElfProjectImage,
        technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Socket.io"],
        link: "https://github.com/andrew-malokhatko/elf"
    },
    {
        name: "Map editor",
        description: "A web messenger app with two-sided encryption designed and implemented using Next.js Framework and MongoDB Database.",
        image: PortfolioProjectImage,
        technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Socket.io"],
        link: "https://github.com/andrew-malokhatko/elf"
    },
    {
        name: "Reversi",
        description: "Classical Reversi Game with a simple algorithm to capure ",
        image: PortfolioProjectImage,
        technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Socket.io"],
        link: "https://github.com/andrew-malokhatko/elf"
    }
];

export default projects;
