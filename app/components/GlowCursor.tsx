'use client'

import { useEffect, useState } from 'react'

export default function GlowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursor)
    return () => window.removeEventListener('mousemove', updateCursor)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 cursor-glow"
      style={{
        '--x': `${position.x}px`,
        '--y': `${position.y}px`
      } as React.CSSProperties}
    />
  )
}