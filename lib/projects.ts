import { StaticImageData } from "next/image";

import ElfProjectImage from "@/public/projects/ProjectElf.png"
import PortfolioProjectImage from "@/public/projects/ProjectPortfolio.png"
import MazeProjectImage from "@/public/projects/ProjectMaze.png"
import MapEditorProjectImage from "@/public/projects/ProjectMapEditor.png"
import ReveriProjectImage from "@/public/projects/ProjectReversi.png"

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
        description: "Work in Progress. Real-time messenger application. Implemented using Next.js Framework and MongoDB Database.",
        image: ElfProjectImage,
        technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Socket.io"],
        link: "https://github.com/andrew-malokhatko/elf"
    },
    {
        name: "Portfolio",
        description: "Portfolio website. Also includes TODO list, API connection and games like Connect 4 and Memory Game.",
        image: PortfolioProjectImage,
        technologies: ["Next.js", "React", "TypeScript", "Tailwind", "API", "CSS"],
        link: "https://github.com/andrew-malokhatko/portfolio"
    },
    {
        name: "Labyrinth Generator",
        description: "Python application to generate and solve labyrinth of different sizes. Implemented with Python and Pygame ",
        image: MazeProjectImage,
        technologies: ["Python", "Pygame"],
        link: "https://github.com/andrew-malokhatko/labyrinth_generator"
    },
    {
        name: "Chess Engine",
        description: "Implemented Chess Engine using minimax and alpha-beta pruning algorithms. Coded Chess logic. Learned about chess programmg.",
        image: PortfolioProjectImage,
        technologies: ["Cocos2d-x", "C++"],
        link: "https://github.com/andrew-malokhatko/chess"
    },
    {
        name: "Map editor",
        description: "Simple map editor with Python and Pygame. Create, edit, copy, paste and save maps(images). Additional Ctrl-Z buffer and hotkeys",
        image: MapEditorProjectImage,
        technologies: ["Python", "Custom file format", "Pygame"],
        link: "https://github.com/andrew-malokhatko/map_editor"
    },
    {
        name: "Reversi",
        description: "Classical Reversi Game. Coded up bot that goes through all possible moves and returns the best one",
        image: ReveriProjectImage,
        technologies: ["Python", "Pygame"],
        link: "https://github.com/andrew-malokhatko/reversi"
    }
];

export default projects;
