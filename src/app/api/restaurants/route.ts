import restaurants from '@/data/restaurants.json'

export async function GET() {
  const openRestaurants = restaurants.filter((restaurant) => restaurant.isOpen)
  const closedRestaurants = restaurants.filter((restaurant) => !restaurant.isOpen)

  return Response.json({ openRestaurants, closedRestaurants })
}
