import { LucideIcon } from "lucide-react";
import { ListTodo, Gamepad2 } from "lucide-react";

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
        Icon: Gamepad2,
    },
    {
        name: "TODO2 List",
        link: "/todo",
        Icon: ListTodo,
    },
    {
        name: "TODO3 List",
        link: "/todo",
        Icon: ListTodo,
    },
]

export default features;