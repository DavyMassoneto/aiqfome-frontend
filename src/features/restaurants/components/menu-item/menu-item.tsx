import React from 'react'

import { Flower, Pepper } from '@/assets/icons'
import { cn, formatMoney } from '@/lib'
import { Typography } from '@/shared/components'

import { MenuItemProps } from './interfaces'

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  showPriceAsMinimum,
  promotionalPrice,
  tags,
}) => {
  const hasPromotion = !!promotionalPrice
  const hasFlowerTag = tags.includes('vegetarian')
  const hasPepperTag = tags.includes('spicy')

  return (
    <div className="flex items-center justify-between gap-4 pl-6 pr-4">
      <div>
        <div className="flex items-center gap-1">
          <Typography variant="variant-1" className="text-neutral-900">
            {name}
          </Typography>
          {hasFlowerTag && <Flower className="text-teal-400" />}
          {hasPepperTag && <Pepper className="text-teal-400" />}
        </div>
        <Typography variant="body" className="text-neutral-500 line-clamp-2">
          {description}
        </Typography>
      </div>

      <div className="text-right">
        {hasPromotion && (
          <Typography variant="label" className="text-neutral-500 line-through">
            {formatMoney(price)}
          </Typography>
        )}

        {showPriceAsMinimum && (
          <Typography variant="label" className="text-neutral-500">
            a partir de
          </Typography>
        )}

        <Typography
          variant="subtitle"
          className={cn('text-purple-500', {
            'text-green-500': hasPromotion,
          })}
        >
          {hasPromotion ? formatMoney(promotionalPrice) : formatMoney(price)}
        </Typography>
      </div>
    </div>
  )
}

export default MenuItem
