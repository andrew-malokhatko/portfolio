import projects from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

const ProjectGrid = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-3">
        {projects.map(({name, description, image, technologies, link}) => (
            <div key={name} className="relative p-5 w-full flex flex-col gap-0.5 border border-border-dark rounded-md duration-500">
                <Image src={image} alt="Project Image" className="w-full h-auto p-1"/>
                <h4 className="text-lg font-bold">{name}</h4>
                <p className="text-xs leading-4 text-text-shadow ">
                    {description}
                </p>
                <div className="flex flex-row flex-wrap mt-4 gap-1">
                    {technologies && technologies.map((technologyName) => (
                        <div key={technologyName} className="text-[11px] font-semibold text-foreground bg-border-dark px-1 py-0.5 rounded-md">
                            {technologyName}
                        </div>
                    ))}
                </div>
                <Link href={link} target="_blank" rel="noopener noreferrer"  className="mt-3 w-fit text-border-dark">
                    <div className="text-[12px] flex flex-row items-center gap-2 text-xs font-bold bg-foreground rounded-md px-2 py-1 hover:bg-foreground-secondary transition">
                        <Github size={14} />
                        <p>Source</p>
                    </div>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default ProjectGrid