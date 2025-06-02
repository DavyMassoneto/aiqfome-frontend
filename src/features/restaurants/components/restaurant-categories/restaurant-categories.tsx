'use client'

import React from 'react'

import { useRestaurants } from '@/features/restaurants/hooks'

import { RestaurantList } from '../restaurant-list'
import { RestaurantCategoriesProps } from './interfaces'

const RestaurantCategories: React.FC<RestaurantCategoriesProps> = () => {
  const { openRestaurants, closedRestaurants } = useRestaurants()

  return (
    <div className="flex flex-col gap-8">
      <RestaurantList title="abertos" restaurants={openRestaurants} />
      <RestaurantList title="fechados" restaurants={closedRestaurants} />
    </div>
  )
}

export default RestaurantCategories
