import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

export interface AccordionContentProps extends React.ComponentProps<typeof AccordionPrimitive.Content> {
  className?: string
  children: React.ReactNode
}
