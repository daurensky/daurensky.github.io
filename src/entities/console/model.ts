import {nanoid} from 'nanoid'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type Command = {
  id: string
  createdAt: Date
  path: string
  stdin: string
  stdout: string
}

type ConsoleState = {
  commands: Command[]
  addCommand: ({
    stdin,
    stdout,
    path,
  }: Pick<Command, 'stdin' | 'stdout'> & Partial<Pick<Command, 'path'>>) => void
  clearCommands: () => void
  currentPath: string
  setCurrentPath: (currentPath: string) => void
}

export const useConsoleStore = create<ConsoleState>()(
  persist(
    set => ({
      commands: [],
      addCommand: ({stdin, stdout, path}) =>
        set(({commands, currentPath}) => ({
          commands: [
            {
              id: nanoid(),
              createdAt: new Date(),
              path: path || currentPath,
              stdin,
              stdout,
            },
            ...commands,
          ],
        })),
      clearCommands: () => set({commands: []}),
      currentPath: '~',
      setCurrentPath: currentPath => set({currentPath}),
    }),
    {
      name: 'console-store',
    }
  )
)

export const directories = [
  {
    type: 'file',
    name: 'README.md',
    content: `
      # My name is Dauren
    `,
  },
  {
    type: 'folder',
    name: 'games',
  },
]
