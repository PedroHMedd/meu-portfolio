"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="py-24 text-center"
    >
      <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
        Contato
      </h2>

      <p className="text-gray-400 mb-8">
        Vamos construir algo juntos.
      </p>

      <div className="flex justify-center gap-6">

        <a
          href="https://github.com/pedrohmedd"
          target="_blank"
          className="group flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/20 transition"
        >
          <FaGithub className="text-xl group-hover:scale-110 transition" />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/opedromedeiros"
          target="_blank"
          className="group flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-600/20 transition"
        >
          <FaLinkedin className="text-xl group-hover:scale-110 transition" />
          LinkedIn
        </a>

      </div>
    </motion.section>
  )
}