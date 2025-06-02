import * as AccordionPrimitive from '@radix-ui/react-accordion'
import React from 'react'

export type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> & {
  children?: React.ReactNode
}
