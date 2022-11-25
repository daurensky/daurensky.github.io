import { ReactNode } from 'react'

interface BaseLayoutProps {
  children: ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <main className="flex flex-col flex-grow h-full font-albert">{children}</main>
)

export default BaseLayout
