"use client"
import { motion } from "framer-motion"

export function HoverText({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="transition hover:text-purple-400 cursor-default"
    >
      {children}
    </motion.span>
  )
}