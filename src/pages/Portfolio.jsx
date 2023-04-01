import projects from "../cms/projects.json";

export default function Portfolio() {
  return (
    <div>
      <h1 className="title">Portfolio</h1>
      <Projects />
    </div>
  );
}

function Projects() {
  return (
    <div className="h-screen pr-4 space-y-4 overflow-y-scroll divide-y divide-white/50">
      {projects.map((project) => (
        <div className="w-48 project md:w-72 py-1">
          <a href={project.url}>
            <h2 className="font-semibold">{project.title}</h2>
            <p className="font-medium">{project.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
