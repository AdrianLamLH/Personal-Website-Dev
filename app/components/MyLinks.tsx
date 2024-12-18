'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

const quotes = [
  { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { text: "I think, therefore I am.", author: "René Descartes" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "Happiness is not an ideal of reason but of imagination.", author: "Immanuel Kant" }
]

export default function MyLinks() {
  const [quote, setQuote] = useState(quotes[0])

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }, [])

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My Links</h2>
        <div className="max-w-md mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center space-x-8"
          >
            <a
              href="https://github.com/AdrianLamLH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/AdrianLHLam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin size={32} />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-6"
          >
            <blockquote className="text-center">
              <p className="text-lg mb-4">"{quote.text}"</p>
              <footer className="text-sm text-gray-400">- {quote.author}</footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

