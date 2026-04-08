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

import ParticlesBackground from "@/components/ParticlesBackground"
import CustomCursor from "@/components/CustomCursor"
import ScrollReveal from "@/components/ScrollReveal"

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <Splash onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-x-hidden">

          <ParticlesBackground />
          <CustomCursor />

          <Navbar />

          <div className="flex flex-col gap-32">

            <Hero />

            <ScrollReveal>
              <About />
            </ScrollReveal>

            <ScrollReveal>
              <Skills />
            </ScrollReveal>

            <ScrollReveal>
              <Projects />
            </ScrollReveal>

            <ScrollReveal>
              <Contact />
            </ScrollReveal>

          </div>

          <Footer />
        </main>
      )}
    </>
  )
}