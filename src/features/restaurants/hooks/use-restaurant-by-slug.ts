import { useSuspenseQuery, queryOptions } from '@tanstack/react-query'

import api from '@/lib/api'
import { Restaurant } from '@/types/restaurant'

export const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const response = await api.get<Restaurant>(`/api/restaurants/${slug}`)
  return response.data
}

export const restaurantBySlugOptions = (slug: string) =>
  queryOptions({
    queryKey: ['restaurant', slug],
    queryFn: () => fetchRestaurantBySlug(slug),
  })

export function useRestaurantBySlug(slug: string) {
  const { data = undefined } = useSuspenseQuery(restaurantBySlugOptions(slug))

  return {
    restaurant: data,
  }
}
