import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-purple-500 hover:scale-[1.02] transition">
      <h2 className="text-3xl font-bold mb-10">Projetos</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-white/10 rounded-xl hover:border-white/30 transition"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="text-gray-400 mt-2">
              {project.description}
            </p>

            <div className="flex gap-2 mt-4 flex-wrap">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}