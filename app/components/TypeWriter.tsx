'use client'

import { useState, useEffect } from 'react'

interface TypeWriterProps {
  text: string
  speed?: number
}

export default function TypeWriter({ text, speed = 30 }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  // Reset animation when text changes
  useEffect(() => {
    setDisplayedText('')
    setCurrentIndex(0)
  }, [text])

  return (
    <div className="whitespace-pre-wrap">
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  )
}