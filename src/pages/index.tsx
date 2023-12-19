import {MainLayout} from '@/shared/ui'
import {Console} from '@/widgets/console'

const IndexRoute = () => (
  <MainLayout>
    <section className="my-16 sm:my-24">
      <div className="max-w-screen-xl w-full mx-auto px-4 space-y-8">
        <Console />
      </div>
    </section>
  </MainLayout>
)

export default IndexRoute
