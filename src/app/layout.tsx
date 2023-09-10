import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Component/Navbar'
import MouseFollow from './Component/MouseFollow'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arun Kumar - Portfolio',
  description: 'Personal Portfolio of Arun Kumar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <MouseFollow/>
        <Navbar/>
          <div className='md:w-[80vw] m-auto'>
            {children}
          </div>
        </body>
    </html>
  )
}
