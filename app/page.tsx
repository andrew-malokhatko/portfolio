import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { FileUser } from "lucide-react";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import EducationMap from "@/components/EducationMap";

const links = {
  github: "https://github.com/andrew-malokhatko",
  linkedin: "https://www.linkedin.com/in/andrew-malokhatko-62039524a/",
  mail: "mailto:andrew.malokhatko@gmail.com",
  cv: "/documents/resume.pdf"
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-gray-50 font-sans w-[806px]">
      <section className="h-[50vh] w-full flex items-end" id="hero">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-7xl font-bold">hi, andrew here👋</h1>
          <p className="mt-6 text-lg">17-year-old <span className="text-blue-400">fullstack developer</span> from Ukraine 🇺🇦</p> 
          <p className="mt-2.5">Currently based in Slovakia 🇸🇰</p>
          <p className="mt-0.5">Student at Slovak University of Technology</p> 
          <div className="flex mt-8 gap-8 ">
            <Button href={links.cv} RightIcon={FileUser}>Resume</Button>
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

      <section className="h-screen flex flex-col gap-4 mt-14" id="projects">
        <div className="text-4xl font-bold w-full">featured projects</div>
          <div className="w-full grid grid-cols-2">
            <div className="w-full h-[200px] bg-red-200">1</div>
            <div className="w-full h-full bg-red-300">1</div>
            <div className="w-full h-[200px] bg-red-400">1</div>
            <div className="w-full h-full bg-red-500">1</div>
          </div>
      </section>

      <section id="contact">
        {/* Contact content */}
      </section>
    </main>
  );
}
