import React from 'react'

import { cn } from '@/lib/utils'

import { InputProps } from './interfaces'

const Input: React.FC<InputProps> = ({ className, icon, type = 'text', ...props }) => (
  <div className="flex items-center bg-white rounded-md border border-decorative focus-within:ring-2 focus-within:ring-purple-600">
    {icon && <div className="flex items-center pl-3 pr-[2.5px]">{icon}</div>}

    <input
      type={type}
      className={cn(
        'w-full py-2 pr-4 bg-transparent rounded-md border-none',
        { 'pl-3': !icon },
        'font-nunito text-sm text-light placeholder:font-semibold placeholder:leading-4 placeholder:tracking-[0]',
        'focus:outline-none',
        className,
      )}
      {...props}
    />
  </div>
)

export default Input
