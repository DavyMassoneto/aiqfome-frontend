import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

export interface AccordionItemProps extends React.ComponentProps<typeof AccordionPrimitive.Item> {
  className?: string
}
