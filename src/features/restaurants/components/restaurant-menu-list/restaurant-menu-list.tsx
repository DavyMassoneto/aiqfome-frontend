'use client'

import React from 'react'

import { RestaurantMenuListProps } from './interfaces'
import { useRestaurantBySlug } from '../../hooks'
import { MenuSection } from '../menu-section'

const RestaurantMenuList: React.FC<RestaurantMenuListProps> = ({ slug }) => {
  const { restaurant } = useRestaurantBySlug(slug)

  if (!restaurant) return null

  return (
    <div>
      {restaurant.menu.map((menuCategory, index) => (
        <React.Fragment key={menuCategory.category}>
          <MenuSection category={menuCategory.category} hasPromotion={menuCategory.hasPromotion} slug={slug} />
          {index < restaurant.menu.length - 1 && <div className="h-1 bg-neutral-100" />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default RestaurantMenuList
