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
      className={`${inter.variable} bg-slate-50-900  bg-primary-50 font-sans text-zinc-50 before:fixed before:left-40 before:h-full before:border-l before:border-l-primary-200`}
    >
      <main className="flex flex-col gap-16 overflow-x-hidden px-6 py-32">
        <div className="fixed bottom-0 right-2 top-0 w-2 bg-stripes" />
        {children}
      </main>
    </body>
  </html>
)

export default Layout
