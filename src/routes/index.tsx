import H1 from '../components/typography/H1'
import H2 from '../components/typography/H2'
import BaseLayout from '../layouts/BaseLayout'

const IndexRoute = () => (
  <BaseLayout>
    <section className="my-16 sm:my-24">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="px-4 space-y-16 sm:space-y-24">
          <div>
            <H2>hi</H2>
            <H1>
              I&apos;m Dauren <br /> fullstack developer
            </H1>
          </div>

          <div className="bg-black text-gray-300 p-8 rounded-xl leading-8">
            <code className="inline-block">
              <span className="text-green-500">you@pc</span>:<span className="text-blue-300">~</span>$ cat about.txt
            </code>
            <code className="inline-block">
              Mostly back-end dev, but I can write front-end as well. I love helping others by automating routine
              things. Also I like to play video games, draw and spend time with friends.
            </code>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 sm:px-4">
          <img src="/img/poster1.jpg" alt="Poster" className="sm:rounded-xl" />
        </div>
      </div>
    </section>
  </BaseLayout>
)

export default IndexRoute
