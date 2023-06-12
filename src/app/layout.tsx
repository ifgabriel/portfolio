import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: "Gabriel Miranda' Portfolio",
}

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="pt-br">
    <body
      className={`${inter.variable} bg-slate-50-900 bg-primary-50 font-sans text-zinc-50`}
    >
      <main className="container mx-auto flex flex-col gap-16 overflow-hidden border-l border-l-primary-200 px-6 py-32 lg:px-52">
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {children}
      </main>
    </body>
  </html>
)

export default Layout
