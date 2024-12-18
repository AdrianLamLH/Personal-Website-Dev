import Header from './components/Header'
import Hero from './components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

