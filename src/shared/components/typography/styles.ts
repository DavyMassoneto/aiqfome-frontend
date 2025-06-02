import { cva } from 'class-variance-authority'

export const typographyVariants = cva('font-nunito tracking-[0] leading-[100%]', {
  variants: {
    variant: {
      title: 'text-xl font-extrabold',
      subtitle: 'text-sm font-bold leading-4.75',
      text: 'text-base font-bold',
      label: 'text-xs font-bold',
      body: 'text-xs font-normal',
      'variant-1': 'text-sm font-semibold leading-4.75',
      'variant-2': 'text-xs font-semibold',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})
