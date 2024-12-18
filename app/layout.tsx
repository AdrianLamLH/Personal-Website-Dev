import './globals.css'
import { Press_Start_2P } from 'next/font/google'

const pixelFont = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Adrian Lam - My Homepage',
  description: 'A portfolio page of my past experiences and fun projects!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pixelFont.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}