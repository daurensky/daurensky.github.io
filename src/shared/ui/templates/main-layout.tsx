import {PropsWithChildren} from 'react'

export const MainLayout = ({children}: PropsWithChildren) => {
  return (
    <>
      <main className="flex flex-col flex-grow h-full font-albert">
        {children}
      </main>
      <footer className="flex justify-center p-4">
        <img src="/img/logo.png" alt="daurensky" className="block w-8" />
      </footer>
    </>
  )
}
