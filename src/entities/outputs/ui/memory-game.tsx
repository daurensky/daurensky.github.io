import {githubApi} from '@/shared/api'
import {useQuery} from '@tanstack/react-query'

export const MemoryGameOutput = () => {
  return (
    <a
      href="https://daurensky.dev/memory-game"
      className="inline-block px-4 py-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
    >
      Start game
    </a>
  )
}

export const MemoryGameFileContent = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['memory-game-raw'],
    queryFn: githubApi.getMemoryGameRaw,
  })

  if (isLoading) {
    return <p>...</p>
  }

  if (isError) {
    return <p>Error occurred</p>
  }

  return <p>{data}</p>
}
