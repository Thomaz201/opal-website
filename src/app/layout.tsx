import type { Metadata } from 'next'
import './globals.css'
import { Manrope } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Opal',
  description: 'Share AI Powered videos with your friends',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${manrope.className} bg-[#171717] antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
