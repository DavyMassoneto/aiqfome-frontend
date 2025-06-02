import { VariantProps } from 'class-variance-authority'
import React from 'react'

import { typographyVariants } from './styles'

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}
