"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-30 blur-3xl rounded-full"></div>

      {/* Nome */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
      >
        Pedro Medeiros
      </motion.h1>

      {/* Headline (versão curta que criamos) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-gray-400 max-w-xl"
      >
        Desenvolvedor Full Stack com foco em back-end e sistemas reais.  
        Experiência em APIs, bancos de dados e integração de serviços.
      </motion.p>

      {/* Botões */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <a href="#projects" className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-500 transition">
          Ver Projetos
        </a>

        <a href="#contact" className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
          Contato
        </a>
      </motion.div>
    </section>
  )
}