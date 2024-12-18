'use client'

import { motion } from 'framer-motion'
import Search from './Search'

export default function Hero() {
  const loadingMessages = [
    "Thinking about your question deeply...",
    "Pondering the ins and outs...",
    "Consulting the digital crystal ball...",
    "Brewing up some answers...",
    "Channeling my inner mindpalace...",
  ];

  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4 pt-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 glow-text">
          <span className="text-pixel-green">&gt;</span> ADRIAN LAM
        </h1>
        <p className="text-xl">Ask me anything!</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        <Search loadingMessages={loadingMessages} />
      </motion.div>
    </section>
  )
}