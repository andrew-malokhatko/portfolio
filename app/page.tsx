import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { FileUser } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import EducationMap from "@/components/EducationMap";
import ProjectGrid from "@/components/ProjectGrid";
import ImplementedGrid from "@/components/ImplementedGrid";
import links from "@/lib/links";



export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-foreground font-sans mb-20">
      <section className="mt-[10%] w-full flex items-end" id="hero">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-7xl font-bold">hi, andrew here👋</h1>
          <p className="mt-6 text-lg">17-year-old <span className="text-blue-400">software developer</span> from Ukraine 🇺🇦</p> 
          <p className="mt-2.5">Currently based in Slovakia 🇸🇰</p>
          <p className="mt-0.5">Student at Slovak University of Technology</p> 
          <div className="flex mt-8 gap-8 ">
            <Button className="hover:bg-border-dark transition border border-border-dark" href={links.cv} RightIcon={FileUser} inNewTab>Resume</Button>
            <div className="flex flex-row gap-2">
              <IconButton href={links.github} Icon={Github} />
              <IconButton href={links.linkedin} Icon={Linkedin} />
              <IconButton href={links.mail} Icon={Mail} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14" id="education">
        <div className="w-full flex flex-col justify-center gap-4 ">
          <div className="w-full text-center rounded-md border border-border-dark bg-border-dark py-1">Education</div>
          <EducationMap></EducationMap>
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 mt-14" id="projects">
        <div className="w-full flex items-end justify-between">
          <div className="text-4xl font-bold w-full">featured projects</div>
          <Button href={links.projects} RightIcon={ArrowRight} className="text-text-shadow hover:text-foreground">View more</Button>
        </div>
        <ProjectGrid limit={3}></ProjectGrid>
      </section>

      <section className="flex flex-col gap-4 justify-between items-center mt-14" id="implemented">
        <div className="text-4xl font-bold w-full">i have also implemented: </div>
        <ImplementedGrid></ImplementedGrid>
      </section>

    </main>
  );
}
