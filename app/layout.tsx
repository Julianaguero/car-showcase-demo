import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'
import Favicon from '@/app/favicon.ico'


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
