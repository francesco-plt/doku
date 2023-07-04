import './globals.css'
import Navbar from './ui/navbar'
import Footer from './ui/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Doku',
  description: 'nextgen documentation platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const fontFamily = 'IBM Plex Mono, monospace'
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
