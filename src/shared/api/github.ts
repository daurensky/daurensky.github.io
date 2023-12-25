import {apiInstance} from './base'

export const getProfileReadme = async () => {
  const {data} = await apiInstance.get<string>(
    'https://raw.githubusercontent.com/daurensky/daurensky/main/README.md'
  )
  return data
}

export const getMemoryGameRaw = async () => {
  const {data} = await apiInstance.get<string>(
    'https://raw.githubusercontent.com/daurensky/memory-game/gh-pages/index.html'
  )
  return data
}
