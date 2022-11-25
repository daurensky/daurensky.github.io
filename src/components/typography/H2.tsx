import { ComponentProps } from 'react'

const H2 = (props: ComponentProps<'h2'>) => (
  <h2 className="text-[30px] sm:text-[40px] text-gray-400 font-rametto" {...props} />
)

export default H2
