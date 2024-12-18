import Header from '../components/Header'
import Projects from '../components/Projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="pt-20">
        <Projects />
      </main>
    </div>
  )
}

