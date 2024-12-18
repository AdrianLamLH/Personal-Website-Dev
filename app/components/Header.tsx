import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-pixel-green/20">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-12">
          <li>
            <Link 
              href="/" 
              className="hover:text-pixel-green hover:glow-text transition-all duration-300 text-sm"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className="hover:text-pixel-green hover:glow-text transition-all duration-300 text-sm"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link 
              href="/my-links" 
              className="hover:text-pixel-green hover:glow-text transition-all duration-300 text-sm"
            >
              LINKS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}