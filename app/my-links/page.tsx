'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Header from '../components/Header'
import GlowCursor from '../components/GlowCursor'


const quotes = [
  { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { text: "I think, therefore I am.", author: "René Descartes" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "Happiness is not an ideal of reason but of imagination.", author: "Immanuel Kant" }
]

const photos = [
  { src: "/images/photo1.jpg", alt: "Description 1" },
  { src: "/images/photo2.JPG", alt: "Description 2" },
  { src: "/images/photo3.jpeg", alt: "Description 3" },
  { src: "/images/photo4.jpg", alt: "Description 4" },
  { src: "/images/photo5.jpeg", alt: "Description 5" },
  { src: "/images/photo6.JPG", alt: "Description 6" },
  { src: "/images/photo7.jpg", alt: "Description 7" },
  { src: "/images/photo8.png", alt: "Description 8" }
]

export default function MyLinks() {
  const [quote, setQuote] = useState(quotes[0])

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <GlowCursor />
      <Header />
      <main className="pt-20">
        <section className="py-12">
          <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center hover:text-pixel-green transition-colors duration-300">
            My Links
          </h2>
            
            {/* Photo Gallery */}
            <div className="mb-16 overflow-hidden">
              <div className="flex gap-4 animate-scroll">
                {[...photos, ...photos].map((photo, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-72 h-72 relative rounded-lg overflow-hidden transition-all duration-300"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-md mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center space-x-8"
              >
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pixel-green transition-colors duration-300 hover:scale-110"
                >
                  <Github size={32} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pixel-green transition-colors duration-300 hover:scale-110"
                >
                  <Linkedin size={32} />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-gray-800 rounded-lg p-6 hover:ring-2 hover:ring-pixel-green transition-all duration-300"
              >
                <blockquote className="text-center">
                  <p className="text-lg mb-4">"{quote.text}"</p>
                  <footer className="text-sm text-gray-400">- {quote.author}</footer>
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}