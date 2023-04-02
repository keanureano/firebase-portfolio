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
    <div className="space-y-4 overflow-y-scroll divide-y divide-white/50 scrollbar-hide">
      {projects.map((project) => (
        <div
          key={project.title}
          className="w-48 py-1 project md:w-72 hover:translate-x-2 transition"
        >
          <a href={project.url}>
            <h2 className="font-semibold">{project.title}</h2>
            <p className="font-medium">{project.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
