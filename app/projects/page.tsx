import ProjectGrid from "@/components/ProjectGrid";

const ProjectsPage = () => {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-text-shadow">
          A collection of projects I've worked on. Each project demonstrates different skills and technologies.
        </p>
      </div>
      <ProjectGrid />
    </main>
  );
};

export default ProjectsPage;
