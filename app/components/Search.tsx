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
    } catch {
      setAnswer('Sorry, something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What do you want to know about me?"
          className="w-full p-4 bg-black/40 text-white placeholder-white/50 
                   focus:outline-none font-pixel text-sm border-0"
        />
      </form>

      {isLoading && (
        <div className="text-center text-pixel-green animate-pulse mt-4 font-pixel text-sm">
          {loadingMessage}
        </div>
      )}

      {answer && !isLoading && (
        <div className="mt-4 p-4 bg-black/40 max-h-[60vh] overflow-y-auto">
          <TypeWriter 
            text={answer} 
            speed={50}
          />
        </div>
      )}
    </div>
  )
}