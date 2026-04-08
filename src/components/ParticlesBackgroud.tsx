"use client"
import { motion } from "framer-motion"  
import { useEffect, useRef } from "react"


export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    let particles: any[] = []
    const mouse = { x: 0, y: 0 }

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x
      mouse.y = e.y
    })

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() - 0.5,
        vy: Math.random() - 0.5,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 120) {
          p.x -= dx * 0.01
          p.y -= dy * 0.01
        }

        ctx.fillStyle = "#a855f7"
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  )
}