import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KD Fotogrametria',
  description: 'Fotogrametria, Geodezja, Inspekcje UAV. Profesjonalne opracowania pomiarowe dla Ciebie i Twojej branży.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
