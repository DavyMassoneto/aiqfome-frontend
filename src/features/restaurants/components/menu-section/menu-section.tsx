'use client'

import React from 'react'

import { CircleDollarSign } from '@/assets/icons'
import { useRestaurantBySlug } from '@/features/restaurants/hooks'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Typography } from '@/shared/components'

import { MenuSectionProps } from './interfaces'
import { MenuItem } from '../menu-item'

const MenuSection: React.FC<MenuSectionProps> = ({ category, hasPromotion, slug }) => {
  const { restaurant } = useRestaurantBySlug(slug)
  const value = category.toLowerCase()

  if (!restaurant) return null

  const menuCategory = restaurant.menu.find((menuCategory) => menuCategory.category === category)

  if (!menuCategory) return null

  const items = menuCategory.items ?? []

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={value}>
        <AccordionTrigger className="flex items-center justify-between px-4 py-3 gap-2">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <Typography variant="text" className="text-neutral-900">
                {category}
              </Typography>
              {hasPromotion && <CircleDollarSign className="w-4.5 h-4.5 text-green-500" />}
            </div>
            {menuCategory.description && (
              <Typography variant="variant-2" className="text-neutral-500">
                {menuCategory.description}
              </Typography>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-6 pb-5">
          {items.map((item, index) => (
            <MenuItem
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              showPriceAsMinimum={item.showPriceAsMinimum}
              price={item.price}
              promotionalPrice={item.promotionalPrice}
              tags={item.tags}
            />
          ))}
          {items.length === 0 && <div className="pl-6 pr-4">Sem Conteúdo ainda</div>}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default MenuSection
