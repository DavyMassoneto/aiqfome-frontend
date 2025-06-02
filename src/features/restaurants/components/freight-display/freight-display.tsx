import React from 'react'

import { Delivery, Motorcycle } from '@/assets/icons'
import { Typography } from '@/shared/components'

import { FreightDisplayProps } from './interfaces'

const FreightDisplay: React.FC<FreightDisplayProps> = ({ freight }) => {
  if (freight === 0) {
    return (
      <div className="flex items-center gap-0.5">
        <Motorcycle aria-label="Icone de moto" className="size-6 text-teal-600" />
        <Typography variant="subtitle" className="text-teal-600">
          grátis
        </Typography>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-0.5">
      <Delivery className="size-6" aria-label="Icone de entrega" />
      <Typography variant="subtitle" className="text-purple-500">
        R$ {freight.toFixed(2)}
      </Typography>
    </div>
  )
}

export default FreightDisplay
