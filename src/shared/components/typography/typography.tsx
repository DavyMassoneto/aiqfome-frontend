import React from 'react'

import { cn } from '@/lib/utils'

import { TypographyProps } from './interfaces'
import { typographyVariants } from './styles'

const Typography: React.FC<TypographyProps> = ({ className, variant, as: Component = 'p', children, ...props }) => {
  return (
    <Component className={cn(typographyVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  )
}

export default Typography
