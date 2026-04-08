"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Splash from "@/components/Splash"

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <Splash onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-x-hidden">

          {/* fundo glow */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute w-[700px] h-[700px] bg-purple-600 opacity-20 blur-3xl top-[-200px] left-[-200px]" />
            <div className="absolute w-[600px] h-[600px] bg-indigo-600 opacity-20 blur-3xl bottom-[-200px] right-[-200px]" />
          </div>

          <Navbar />

          <div className="flex flex-col gap-32">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>

          <Footer />
        </main>
      )}
    </>
  )
}