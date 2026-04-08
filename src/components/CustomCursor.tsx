"use client"
import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
    >
      <div className="w-4 h-4 bg-purple-500 rounded-full blur-sm opacity-80" />
    </div>
  )
}