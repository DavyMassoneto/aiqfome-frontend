import '@/styles/global.css'

import type { Metadata } from 'next'
import React from 'react'

import { QueryClientProvider } from '@/lib'

export const metadata: Metadata = {
  title: 'aiqfome',
  description: 'aiqfome delivery app',
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
