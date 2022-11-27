import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const H1 = ({ className, ...props }: ComponentProps<'h1'>) => (
  <h2 className={twMerge('text-[40px] sm:text-[60px] text-gray-300 font-rametto', className)} {...props} />
)

export default H1
