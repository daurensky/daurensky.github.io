import {githubApi} from '@/shared/api'
import {useQuery} from '@tanstack/react-query'
import {useEffect} from 'react'
import Markdown from 'react-markdown'

export const AboutMeOutput = () => {
  const {data: profileReadme} = useQuery({
    queryKey: ['github-readme'],
    queryFn: githubApi.getProfileReadme,
  })

  return (
    <Markdown
      components={{
        ul: ({...props}) => <ul {...props} className="flex flex-col gap-1" />,
        a: ({...props}) => <a {...props} className="underline" />,
      }}
      className="p-4 bg-white/10 rounded-md"
    >
      {profileReadme}
    </Markdown>
  )
}
