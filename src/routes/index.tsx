import H1 from '../components/typography/H1'
import H2 from '../components/typography/H2'
import additionalSkills from '../data/additional_skills.json'
import contacts from '../data/contacts.json'
import skills from '../data/skills.json'
import BaseLayout from '../layouts/BaseLayout'

const skillsSection = [
  {
    title: 'Skills',
    rows: skills,
  },
  {
    title: 'Also...',
    rows: additionalSkills,
  },
]

const IndexRoute = () => (
  <BaseLayout>
    <section className="my-8 sm:my-16">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="px-4 space-y-8 sm:space-y-16">
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

          {skillsSection.map(({ title, rows }) => (
            <div className="space-y-4" key={title}>
              <H2>{title}</H2>

              <div className="flex items-center flex-wrap gap-4 sm:gap-8">
                {rows.map(({ name, icon }) => (
                  <div className="flex items-center gap-2 sm:gap-3" key={name}>
                    <div className="w-[24px] h-[24px]">
                      <img src={icon} alt="Icon" />
                    </div>
                    <span className="text-gray-300 font-bold">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

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

        <div className="mt-8 sm:mt-16 sm:px-4">
          <img src="/img/poster1.jpg" alt="Poster" className="sm:rounded-xl" />
        </div>
      </div>
    </section>
  </BaseLayout>
)

export default IndexRoute
