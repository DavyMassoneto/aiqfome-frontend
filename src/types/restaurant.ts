export interface MenuItem {
  name: string
  description: string
  price: number
  showPriceAsMinimum: boolean
  promotionalPrice?: number
  tags: string[]
}

export interface MenuCategory {
  category: string
  description?: string
  hasPromotion: boolean
  items: MenuItem[]
}

export interface Restaurant {
  id: number
  name: string
  freight: number
  rating: number
  image: string
  isOpen: boolean
  slug: string
  deliveryTime: string
  distance: number
  freeDeliveryThreshold: number
  closingTime: string
  minimumOrder: number
  menu: MenuCategory[]
}

export interface RestaurantsResponse {
  openRestaurants: Restaurant[]
  closedRestaurants: Restaurant[]
}
