import { useSuspenseQuery, queryOptions } from '@tanstack/react-query'

import api from '@/lib/api'
import { RestaurantsResponse } from '@/types/restaurant'

export const fetchRestaurants = async (): Promise<RestaurantsResponse> => {
  const response = await api.get<RestaurantsResponse>('/api/restaurants')
  return response.data
}

export const restaurantsOptions = queryOptions({
  queryKey: ['restaurants'],
  queryFn: fetchRestaurants,
})

export function useRestaurants() {
  const { data = { openRestaurants: [], closedRestaurants: [] } } = useSuspenseQuery(restaurantsOptions)

  return {
    openRestaurants: data.openRestaurants,
    closedRestaurants: data.closedRestaurants,
  }
}
