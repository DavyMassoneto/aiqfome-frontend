import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import React from 'react'

import { RestaurantHeader, RestaurantInfo, RestaurantMenuList } from '@/features/restaurants/components'
import { restaurantBySlugOptions } from '@/features/restaurants/hooks'
import { getQueryClient } from '@/lib'
import { Footer, Header } from '@/shared/components'

interface RestaurantPageProps {
  params: Promise<{ slug: string }>
}

const RestaurantPage: React.FC<RestaurantPageProps> = async ({ params }) => {
  const { slug } = await params
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(restaurantBySlugOptions(slug))

  const dehydratedState = dehydrate(queryClient)

  return (
    <main role="main">
      <Header />
      <div className="py-6 flex flex-col gap-6">
        <HydrationBoundary state={dehydratedState}>
          <RestaurantHeader slug={slug} />
          <RestaurantInfo slug={slug} />
          <RestaurantMenuList slug={slug} />
        </HydrationBoundary>
      </div>
      <Footer />
    </main>
  )
}

export default RestaurantPage
