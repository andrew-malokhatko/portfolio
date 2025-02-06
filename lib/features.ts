import { LucideIcon } from "lucide-react";
import { ListTodo, Gamepad2, Laugh, Grid2x2X, Calculator } from "lucide-react";

interface Feature {
    name: string;
    link: string;
    Icon: LucideIcon;
}

const features: Feature[] = [
    {
        name: "TODO List",
        link: "/todo",
        Icon: ListTodo,
    },
    {
        name: "Connect 4 Game",
        link: "/connect-4",
        Icon: Grid2x2X,
    },
    {
        name: "Joke API",
        link: "/joke",
        Icon: Laugh,
    },
    {
        name: "Memory Game",
        link: "/memory",
        Icon: Gamepad2,
    },
    {
        name: "Calculator",
        link: "/calculator",
        Icon: Calculator,
    },
]

export default features;