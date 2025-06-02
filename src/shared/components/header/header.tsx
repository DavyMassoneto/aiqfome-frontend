import { ChevronRight, MapPin, Search } from 'lucide-react'
import React from 'react'

import { Company, User } from '@/assets/icons'
import { Input, Typography } from '@/shared/components'

import { HeaderProps } from './interfaces'

const Header: React.FC<HeaderProps> = ({ hasSearch }) => {
  return (
    <header className="bg-purple-500 h-fit p-4 flex flex-col gap-4" role="banner">
      <div className="flex items-center justify-between">
        <Company width={32} height={32} className="text-white" aria-label="Company logo" />
        <div className="flex items-center">
          <MapPin size={24} className="text-white mr-2" aria-hidden="true" />
          <div>
            <Typography variant="subtitle" className="text-purple-200">
              entregando em
            </Typography>
            <div className="flex items-center gap-1">
              <Typography variant="text" className="text-white">
                Rua Mandaguari, 198
              </Typography>
              <ChevronRight className="size-4 text-white" aria-hidden="true" />
            </div>
          </div>
        </div>
        <User className="text-white size-6" aria-label="User profile" />
      </div>
      {hasSearch && (
        <Input
          icon={<Search size={16} className="text-gray-400" aria-hidden="true" />}
          placeholder="busque pela loja ou culinária"
          aria-label="busque pela loja ou culinária"
        />
      )}
    </header>
  )
}

export default Header
