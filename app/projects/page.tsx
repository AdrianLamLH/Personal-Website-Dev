import Header from '../components/Header'
import Projects from '../components/Projects'
import GlowCursor from '../components/GlowCursor'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <GlowCursor />
      <Header />
      <main className="pt-20 container mx-auto px-6">
        <div className="min-h-[80vh]">
          <Projects />
        </div>
      </main>
    </div>
  )
}