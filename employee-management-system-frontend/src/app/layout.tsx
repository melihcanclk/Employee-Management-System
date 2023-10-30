import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/app/Providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import "@/styles/index.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Employee Management System',
  description: 'Employee Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
