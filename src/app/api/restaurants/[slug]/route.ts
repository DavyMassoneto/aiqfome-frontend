import restaurants from '@/data/restaurants.json'
import { Restaurant } from '@/types/restaurant'

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params
  const restaurant = restaurants.find((restaurant: Restaurant) => restaurant.slug === slug)

  if (!restaurant) {
    return Response.json({ error: 'Restaurant not found' }, { status: 404 })
  }

  return Response.json(restaurant)
}
