'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { AccordionItemProps } from './interfaces'

const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  return <AccordionPrimitive.Item data-slot="accordion-item" {...props} />
}

export default AccordionItem
