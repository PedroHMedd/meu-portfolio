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
import ParticlesBackground from "@/components/ParticlesBackgroud"
import CustomCursor from "@/components/CustomCursor"

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <Splash onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-x-hidden">

          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute w-[900px] h-[900px] bg-purple-600 opacity-30 blur-[120px] top-[-300px] left-[-300px]" />
            <div className="absolute w-[800px] h-[800px] bg-indigo-600 opacity-30 blur-[120px] bottom-[-300px] right-[-300px]" />
            <div className="absolute w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[100px] top-[40%] left-[30%]" />
          </div>

          <Navbar />

          <div className="flex flex-col gap-32">
            <ParticlesBackground />
            <CustomCursor />
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