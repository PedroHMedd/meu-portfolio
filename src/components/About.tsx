"use client"
import { motion } from "framer-motion"
import { HoverText } from "./HoverText" 

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 max-w-4xl mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
        Sobre mim
      </h2>

      {/* BLOCO PRINCIPAL */}
      <div className="border-l-2 border-purple-500 pl-6 space-y-6">

        <p className="text-lg text-white font-medium">
          Técnico em Informática para Internet pela ETEC Prof. Maria Cristina Medeiros,
          classificada entre as 31 melhores escolas públicas do Brasil.
        </p>

        <p className="text-gray-400">
          Desenvolvedor com foco em back-end, APIs e construção de sistemas reais.
          Experiência prática com PHP, Node.js, MySQL e integração de serviços.
        </p>

        <p className="text-gray-400">
          Interesso-me por Python, inteligência artificial, LLMs, RAG e sistemas orientados a dados,
          aplicando lógica e matemática para resolver problemas complexos.
        </p>

      </div>
    </motion.section>
  )
}