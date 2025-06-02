'use client'

import { ChevronRight, Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Share } from '@/assets/icons'
import { useRestaurantBySlug } from '@/features/restaurants/hooks'
import { Typography } from '@/shared/components'

import { RestaurantHeaderProps } from './interfaces'

const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({ slug }) => {
  const { restaurant } = useRestaurantBySlug(slug)

  if (!restaurant) return null

  return (
    <div className="flex px-4 flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image
          src={restaurant.image}
          alt={`Imagem do restaurante ${restaurant.name}`}
          width={36}
          height={36}
          priority
          className="rounded-sm"
        />
        <Typography variant="title">{restaurant.name}</Typography>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-purple-700 flex gap-3 items-center">
          <Share />
          <Heart />
        </div>
        <button className="flex gap-1 items-center text-teal-400">
          <Typography variant="label">mais infos</Typography>
          <ChevronRight size={8} />
        </button>
      </div>
    </div>
  )
}

export default RestaurantHeader
