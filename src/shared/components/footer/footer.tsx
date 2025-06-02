import React from 'react'

import { Typography } from '@/shared/components'

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 h-30 flex flex-col items-center justify-center gap-4 p-4 text-purple-700">
      <Typography variant="subtitle">feito com 💜 em maringá-PR</Typography>
      <div className="flex flex-col items-center">
        <Typography variant="text">aiqfome.com © 2007-2023 aiqfome LTDA .</Typography>
        <Typography variant="text">CNPJ: 09.186.786/0001-58</Typography>
      </div>
    </footer>
  )
}

export default Footer
