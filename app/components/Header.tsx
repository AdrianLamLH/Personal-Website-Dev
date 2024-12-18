import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full z-10 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
          <li><Link href="/my-links" className="hover:text-blue-400 transition-colors">My Links</Link></li>
        </ul>
      </nav>
    </header>
  )
}

