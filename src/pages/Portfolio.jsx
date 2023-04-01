import projects from "../cms/projects.json";

export default function Portfolio() {
  return (
    <div>
      <h2 className="mb-4 font-semibold">Previous Work</h2>
      <Projects />
    </div>
  );
}

function Projects() {
  return (
    <div className="space-y-1 divide-y divide-white/50">
      {projects.map((project) => (
        <div className="project w-64">
          <a href={project.url}>
            <h1 className="text-xl">{project.title}</h1>
            <p className="font-medium">{project.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
