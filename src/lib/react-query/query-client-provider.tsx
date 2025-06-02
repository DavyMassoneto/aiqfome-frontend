'use client'
import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

import { getQueryClient } from './get-query-client'

interface QueryClientProviderProps {
  children: React.ReactNode
}

const QueryClientProvider: React.FC<QueryClientProviderProps> = ({ children }) => {
  const queryClient = getQueryClient()

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </TanstackQueryClientProvider>
  )
}

export default QueryClientProvider
