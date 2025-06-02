'use client'

import { ChevronRight, Star } from 'lucide-react'
import React from 'react'

import { Motorcycle } from '@/assets/icons'
import { useRestaurantBySlug } from '@/features/restaurants/hooks'
import { Typography } from '@/shared/components'

import { RestaurantInfoProps } from './interfaces'

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ slug }) => {
  const { restaurant } = useRestaurantBySlug(slug)

  if (!restaurant) return null
  return (
    <div className="flex px-4 flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-0.5 text-purple-500">
          <Motorcycle aria-label="Icone de moto" className="size-6" />
          <Typography variant="subtitle">R$ {restaurant.freight.toFixed(2)}</Typography>
          <ChevronRight size={8} />
        </div>
        <Typography variant="label" className="text-neutral-400">
          •
        </Typography>
        <Typography variant="label" className="text-neutral-500">
          {restaurant.deliveryTime}
        </Typography>
        <Typography variant="label" className="text-neutral-400">
          •
        </Typography>
        <Typography variant="label" className="text-neutral-500">
          {restaurant.distance}km
        </Typography>
      </div>
      <div className="px-1 py-1.5 w-fit bg-teal-50 rounded-sm text-teal-600">
        <Typography variant="label" className="">
          entrega grátis acima de R$ {restaurant.freeDeliveryThreshold.toFixed(2)}
        </Typography>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <Typography variant="label" className="text-neutral-500">
            {restaurant.rating} de 5
          </Typography>
          <ChevronRight className="w-2 h-2 text-neutral-500" />
        </div>
        <Typography variant="label" className="text-neutral-400">
          •
        </Typography>
        <Typography variant="label" className="text-green-500">
          fecha às {restaurant.closingTime}
        </Typography>
      </div>
      <Typography variant="label" className="text-neutral-500">
        pedido mínimo: R$ {restaurant.minimumOrder.toFixed(2)}
      </Typography>
    </div>
  )
}

export default RestaurantInfo
