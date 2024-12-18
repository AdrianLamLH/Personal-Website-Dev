'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SearchIcon } from 'lucide-react'
import { searchDocuments } from '../actions/search'
import type { SearchProps, SearchResponse } from '@/types/search'

export default function Search({ placeholder = "Ask me anything..." }: SearchProps) {
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setAnswer('')
    setError(null)

    try {
      const response: SearchResponse = await searchDocuments(query)
      if (response.error) {
        setError(response.error)
      } else {
        setAnswer(response.answer)
      }
    } catch (err) {
      console.error('Search error:', err)
      setError('An unexpected error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-12 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SearchIcon className="w-5 h-5" />
          <span className="sr-only">Search</span>
        </button>
      </form>

      <AnimatePresence>
        {(answer || error || isLoading) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-t-2 border-blue-500 rounded-full animate-spin" />
              </div>
            ) : error ? (
              <p className="text-red-400 whitespace-pre-wrap">{error}</p>
            ) : (
              <p className="text-white whitespace-pre-wrap">{answer}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

