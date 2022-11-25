import { Link } from 'react-router-dom'
import H1 from '../components/typography/H1'
import H2 from '../components/typography/H2'
import BaseLayout from '../layouts/BaseLayout'

const ErrorRoute = () => (
  <BaseLayout>
    <section className="my-8 sm:my-16 h-full flex flex-col flex-grow justify-center">
      <div className="max-w-screen-xl w-full mx-auto px-4 space-y-8 sm:space-y-16">
        <div>
          <H2>Oops...</H2>
          <H1>Looks like you got lost</H1>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-gray-500 text-background font-bold text-base"
        >
          <i className="fa-solid fa-house"></i>
          <span>To home</span>
        </Link>
      </div>
    </section>
  </BaseLayout>
)

export default ErrorRoute
