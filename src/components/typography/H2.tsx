import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const H2 = ({ className, ...props }: ComponentProps<'h2'>) => (
  <h2 className={twMerge('text-[30px] sm:text-[40px] text-gray-400 font-rametto', className)} {...props} />
)

export default H2
