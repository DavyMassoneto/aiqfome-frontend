import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { AccordionProps } from './interfaces'

const Accordion: React.FC<AccordionProps> = (props) => {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

export default Accordion
