"use client"

import { motion } from "framer-motion"
import { FaPhp, FaNodeJs, FaPython, FaJs, FaReact } from "react-icons/fa"
import { SiMysql, SiLaravel, SiTypescript, SiNextdotjs } from "react-icons/si"

const skills = [
  {
    category: "Back-end",
    items: [
      { name: "PHP", icon: <FaPhp /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Laravel", icon: <SiLaravel /> },
    ]
  },
  {
    category: "Front-end",
    items: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
    ]
  },

  {
  category: "Especialidades",
  items: [
    { name: "APIs REST", icon: "⚙️" },
    { name: "Autenticação", icon: "🔐" },
    { name: "Geolocalização", icon: "📍" },
  ]
}

]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 max-w-6xl mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((group, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {group.items.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition"
                >
                  <span className="text-xl text-purple-400">
                    {skill.icon}
                  </span>
                  <span className="text-sm">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}