import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const H4 = ({ className, ...props }: ComponentProps<'h4'>) => (
  <h4 className={twMerge('text-[18px] sm:text-[24px] text-gray-400 font-rametto', className)} {...props} />
)

export default H4
