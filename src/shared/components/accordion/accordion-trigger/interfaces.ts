import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

export interface AccordionTriggerProps extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
  className?: string
  children: React.ReactNode
}
