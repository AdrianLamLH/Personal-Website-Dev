import Header from './components/Header'
import Hero from './components/Hero'
import GlowCursor from './components/GlowCursor'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <GlowCursor />
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}