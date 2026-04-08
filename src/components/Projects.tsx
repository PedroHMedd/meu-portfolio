"use client"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Happy Idosos",
    desc: "Plataforma com autenticação, API de localização e sistema de voluntariado.",
  },
  {
    title: "Sistema Web Completo",
    desc: "Aplicação com múltiplos usuários, banco relacional e integração.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-purple-400">
        Projetos
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-purple-500 transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-4">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}