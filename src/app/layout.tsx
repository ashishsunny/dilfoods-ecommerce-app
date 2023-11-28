import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Layout from '@/layout/layout'

const manrope = Manrope(
  {
  subsets:['latin'],
  weight: ['200','300','400','500','600','700','800'],
  variable:'--font-manrope'
})

export const metadata: Metadata = {
  title: 'Ecommerce | Dil Foods Test',
  description: 'A Next.js based e-commerce application with item listing, cart checkout.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
      <Layout>
          {children}
      </Layout>
      </body>
    </html>
  )
}
