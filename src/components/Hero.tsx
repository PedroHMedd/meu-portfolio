"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="grid md:grid-cols-2 items-center gap-12 max-w-6xl w-full">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Pedro Medeiros
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Backend • Data • AI • Systems <br /> 
            Construindo soluções com foco em performance e inteligência.
          </p>
        </motion.div>

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow atrás */}
            <div className="absolute inset-0 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>

            <Image
              src="/profile2.jpg"
              alt="Pedro"
              width={260}
              height={260}
              className="relative rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.4)] object-cover"
            />

          </div>
        </motion.div>

      </div>
    </section>
  )
}