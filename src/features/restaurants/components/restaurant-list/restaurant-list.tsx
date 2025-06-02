import React from 'react'

import { Typography } from '@/shared/components'

import { RestaurantCard } from '../restaurant-card'
import { RestaurantListProps } from './interfaces'

const RestaurantList: React.FC<RestaurantListProps> = ({ title, restaurants }) => {
  if (restaurants.length === 0) return null

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="title" as="h2" className="text-purple-500">
        {title}
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantList
