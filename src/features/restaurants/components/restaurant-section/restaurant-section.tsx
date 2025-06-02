import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import React from 'react'

import { restaurantsOptions } from '@/features/restaurants/hooks'
import { getQueryClient } from '@/lib'

import { RestaurantSectionProps } from './interfaces'
import { RestaurantCategories } from '../restaurant-categories'

const RestaurantSection: React.FC<RestaurantSectionProps> = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(restaurantsOptions)

  const dehydratedState = dehydrate(queryClient)

  return (
    <div className="container mx-auto px-4 py-8">
      <HydrationBoundary state={dehydratedState}>
        <RestaurantCategories />
      </HydrationBoundary>
    </div>
  )
}

export default RestaurantSection
