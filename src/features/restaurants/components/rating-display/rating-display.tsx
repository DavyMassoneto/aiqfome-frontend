import { Star } from 'lucide-react'
import React from 'react'

import { Typography } from '@/shared/components'

import { RatingDisplayProps } from './interfaces'

const RatingDisplay: React.FC<RatingDisplayProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      <Star className="w-4 h-4 text-yellow-500 fill-current" />
      <Typography variant="subtitle" className="text-neutral-500">
        {rating.toFixed(1)}
      </Typography>
    </div>
  )
}

export default RatingDisplay
