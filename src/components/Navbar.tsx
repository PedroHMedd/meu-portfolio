"use client"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-6 px-6 py-3 rounded-full 
        bg-white/5 backdrop-blur-xl border border-white/10">

        <span className="font-bold text-purple-400">
          PH.dev
        </span>

        <div className="flex gap-4 text-sm">
          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group"
            >
              <span className="group-hover:text-purple-400 transition">
                {item}
              </span>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}