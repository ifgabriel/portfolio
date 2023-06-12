import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Gabriel Miranda',
}

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="pt-br">
    <body className={`${inter.variable} bg-slate-50-900 font-sans`}>
      <main className="container">{children}</main>
    </body>
  </html>
)

export default Layout
