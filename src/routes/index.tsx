import moment from 'moment'
import H1 from '../components/typography/H1'
import H2 from '../components/typography/H2'
import H3 from '../components/typography/H3'
import H4 from '../components/typography/H4'
import contacts from '../data/contacts.json'
import skills from '../data/skills.json'
import works from '../data/works.json'
import BaseLayout from '../layouts/BaseLayout'
import { getHumanDuration } from '../utils'

const worksWithDates = works.map(work => {
  const from = moment(work.from)
  const to = work.to === 'now' ? moment() : moment(work.to)

  return {
    ...work,
    from: from.format('MMM YYYY'),
    to: to.format('MMM YYYY'),
    workingTime: getHumanDuration(from, to),
  }
})

const IndexRoute = () => (
  <BaseLayout>
    <section className="my-16 sm:my-24">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="px-4 space-y-16 sm:space-y-24">
          <div>
            <H2>hello</H2>
            <H1>
              I'm Dauren <br /> <span data-age>20</span> y.o. backend developer from Almaty
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

          <div className="space-y-4">
            <H2>Skills</H2>

            <div className="flex items-center flex-wrap gap-4 sm:gap-8">
              {skills.map(({ name, icon }) => (
                <div className="flex items-center gap-2 sm:gap-3" key={name}>
                  <div className="w-[24px] h-[24px]">
                    <img src={icon} alt="Icon" />
                  </div>
                  <span className="text-gray-300 font-bold">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <H2>Experience</H2>
              <img src="/img/exp.webp" alt="Icon" width={32} />
            </div>

            <div className="flex flex-col items-center gap-8 sm:gap-16">
              {worksWithDates.map(({ name, from, to, position, details, achievements, logo, workingTime }) => (
                <div className="flex flex-col items-center w-full sm:flex-row sm:items-start sm:gap-16" key={name}>
                  <div className="shrink-0 w-[256px] h-[256px]">
                    <img src={logo} alt={name} />
                  </div>
                  <div className="w-full">
                    <H3 className="text-gray-300">{position}</H3>
                    <H4>
                      {from} - {to}
                    </H4>
                    <H4>{workingTime}</H4>

                    <div className="my-8 p-4 border-2 border-dashed border-gray-800 rounded w-full">
                      <p className="text-gray-400 leading-7">{details}</p>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 mt-2 w-[24px] h-[24px]">
                        <img src="/img/hat.png" alt="Hat" />
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {achievements.map(achievement => (
                          <div className="px-4 py-2 bg-white/5 rounded" key={achievement}>
                            <span className="text-gray-400 text-sm font-bold">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <H2>Find me</H2>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
              {contacts.map(({ name, link, icon }) => (
                <a
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center gap-2 border-2 border-gray-500 text-gray-500 py-2 px-4 rounded-xl hover:bg-gray-500 hover:text-background transition-colors ease-in-out"
                  title={name}
                  key={name}
                >
                  <i className={`${icon} text-[24px]`} />
                  <span className=" font-bold">{name}</span>
                </a>
              ))}
            </div>
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
