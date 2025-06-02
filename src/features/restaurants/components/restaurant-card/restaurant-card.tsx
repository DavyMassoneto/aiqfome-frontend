import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FreightDisplay, RatingDisplay } from '@/features/restaurants/components'
import { cn } from '@/lib/utils/cn'
import { Typography } from '@/shared/components'

import { RestaurantCardProps } from './interfaces'

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Link
      href={restaurant.isOpen ? `/restaurant/${restaurant.slug}` : '#'}
      aria-label={`Ver restaurante ${restaurant.name}`}
      className={cn(
        'block w-full text-left',
        'bg-neutral-50 h-18 flex rounded-lg transition-colors',
        'hover:bg-neutral-100 active:bg-neutral-200',
        'focus:outline-none',
        {
          'opacity-40 cursor-not-allowed pointer-events-none': !restaurant.isOpen,
          'cursor-pointer': restaurant.isOpen,
        },
      )}
    >
      <Image
        src={restaurant.image}
        alt={`${restaurant.name} thumbnail`}
        width={72}
        height={72}
        className="rounded-l-lg object-cover"
      />
      <div className="p-3 flex w-full justify-between flex-col gap-1">
        <Typography variant="text" className="text-neutral-700">
          {restaurant.name}
        </Typography>
        <div className="flex gap-1 text-sm text-gray-600">
          <FreightDisplay freight={restaurant.freight} />
          <RatingDisplay rating={restaurant.rating} />
        </div>
      </div>
    </Link>
  )
}

export default RestaurantCard
