export interface MenuItemProps {
  name: string
  description: string
  price: number
  promotionalPrice?: number
  showPriceAsMinimum: boolean
  tags: string[]
}
