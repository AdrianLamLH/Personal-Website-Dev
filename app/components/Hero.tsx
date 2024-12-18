'use client'

import { motion } from 'framer-motion'
import Search from './Search'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-6xl font-bold mb-4">Adrian Lam</h1>
        <p className="text-2xl text-gray-300">Ask me anything!</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full"
      >
        <Search />
      </motion.div>
    </section>
  )
}

