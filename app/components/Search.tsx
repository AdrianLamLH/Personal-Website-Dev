'use client'

import { useState, useEffect } from 'react'
import { searchDocuments } from '@/app/actions/search'
import TypeWriter from './TypeWriter'

interface SearchProps {
  loadingMessages: string[]
}

export default function Search({ loadingMessages }: SearchProps) {
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isLoading) {
      let messageIndex = 0
      // Set initial message
      setLoadingMessage(loadingMessages[0])
      
      // Rotate through messages every 2 seconds
      interval = setInterval(() => {
        messageIndex = (messageIndex + 1) % loadingMessages.length
        setLoadingMessage(loadingMessages[messageIndex])
      }, 2000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isLoading, loadingMessages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setAnswer('')

    try {
      const response = await searchDocuments(query)
      setAnswer(response.answer)
    } catch (error) {
      setAnswer('Sorry, something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto w-full">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything about my experience..."
          className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      {isLoading && (
        <div className="text-center text-gray-300 animate-pulse">
          {loadingMessage}
        </div>
      )}

      {answer && !isLoading && (
        <div className="mt-4 p-4 rounded-lg bg-gray-700">
          <TypeWriter 
            text={answer} 
            typingSpeed={30} 
            pauseBetweenSentences={800} 
          />
        </div>
      )}
    </div>
  )
}