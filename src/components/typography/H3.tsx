import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const H3 = ({ className, ...props }: ComponentProps<'h3'>) => (
  <h3 className={twMerge('text-[20px] sm:text-[30px] text-gray-400 font-rametto', className)} {...props} />
)

export default H3
