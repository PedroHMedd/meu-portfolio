"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Splash({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 1800)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-[999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.4, duration: 0.5 }}
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-purple-500"
      >
        PH.dev
      </motion.h1>
    </motion.div>
  )
}