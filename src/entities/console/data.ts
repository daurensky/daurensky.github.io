import {
  AboutMeOutput,
  MemoryGameFileContent,
  MemoryGameOutput,
  SecretOutput,
} from '../outputs'
import {Dir} from './model'

export const rootDir: Dir = {
  type: 'dir',
  name: '',
  paths: [
    {
      type: 'dir',
      name: 'super-secret-folder',
      paths: [
        {
          type: 'file',
          name: 'secreeet.md',
          content: SecretOutput.name,
        },
      ],
    },
    {
      type: 'dir',
      name: 'games',
      paths: [
        {
          type: 'script',
          name: 'memory-game.sh',
          content: MemoryGameFileContent.name,
          component: MemoryGameOutput.name,
        },
      ],
    },
    {
      type: 'file',
      name: 'about-me.md',
      content: AboutMeOutput.name,
    },
  ],
}
