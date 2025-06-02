import React from 'react'

import CircleDollarSignSvg from './svg/circle-dollar-sign.svg'
import CompanySvg from './svg/company.svg'
import DeliverySvg from './svg/delivery.svg'
import FlowerSvg from './svg/flower.svg'
import MotorcycleSvg from './svg/motorcycle.svg'
import PepperSvg from './svg/pepper.svg'
import ShareSvg from './svg/share.svg'
import UserSvg from './svg/user.svg'

export const Company: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <CompanySvg {...props} />
}

export const Delivery: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <DeliverySvg {...props} />
}

export const Motorcycle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <MotorcycleSvg {...props} />
}

export const Flower: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <FlowerSvg {...props} />
}

export const Pepper: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <PepperSvg {...props} />
}

export const Share: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <ShareSvg {...props} />
}

export const CircleDollarSign: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <CircleDollarSignSvg {...props} />
}

export const User: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return <UserSvg {...props} />
}
