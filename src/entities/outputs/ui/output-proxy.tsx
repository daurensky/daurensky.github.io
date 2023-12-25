import {ReactNode} from 'react'
import {AboutMeOutput} from './about-me'
import {HelpOutput} from './help'
import {MemoryGameFileContent, MemoryGameOutput} from './memory-game'
import {SecretOutput} from './secret'

type OutputProxyProps = {
  output: string
  fallback: ReactNode
}

export const OutputProxy = ({output, fallback}: OutputProxyProps) => {
  const outputs = {
    [HelpOutput.name]: HelpOutput,
    [AboutMeOutput.name]: AboutMeOutput,
    [SecretOutput.name]: SecretOutput,
    [MemoryGameOutput.name]: MemoryGameOutput,
    [MemoryGameFileContent.name]: MemoryGameFileContent,
  }

  const Component = outputs[output]

  return Component ? <Component /> : fallback
}
