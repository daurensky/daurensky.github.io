import { ComponentProps } from 'react'

const H1 = (props: ComponentProps<'h1'>) => (
  <h2 className="text-[40px] sm:text-[60px] text-gray-300 font-rametto" {...props} />
)

export default H1
