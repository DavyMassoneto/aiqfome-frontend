import Image from 'next/image'
import React from 'react'

import { RestaurantSection } from '@/features/restaurants/components'
import { Footer, Header } from '@/shared/components'

const HomePage: React.FC = () => {
  return (
    <main role="main">
      <Header hasSearch />
      <section aria-label="Promotional content" className="relative w-full h-32.5">
        <Image src="/assets/images/banner.png" alt="Promotional banner for aiqfome" priority fill />
      </section>
      <RestaurantSection />
      <Footer />
    </main>
  )
}

export default HomePage
