import './css/style.css'

import { Inter, DM_Serif_Display } from 'next/font/google'

import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
  display: 'swap',
})

export const metadata = {
  title: 'CaseBuddy – AI case interview practice on your phone',
  description:
    'Get case-ready 3x faster with AI-powered mock interviews, structured scoring, and analytics built for consulting recruiting.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${dmSerif.variable} font-inter antialiased bg-cream text-ink tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
