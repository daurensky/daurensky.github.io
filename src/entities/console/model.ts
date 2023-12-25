import {nanoid} from 'nanoid'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {consoleLib} from '.'
import {HelpOutput} from '../outputs'
import {rootDir} from './data'
import {divideFileNameWithFilePath} from './lib'

type Command = {
  id: string
  createdAt: Date
  path: string
  stdin: string
  stdout?: string
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
  updateCurrentPath: (currentPath: string) => void
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
      currentPath: '/',
      updateCurrentPath: currentPath => set({currentPath}),
    }),
    {
      name: 'console-store',
    }
  )
)

export const usePathResolver = () => {
  const {currentPath} = useConsoleStore()

  const getResolvedPath = (path: string) => {
    if (!path.startsWith('/')) {
      path = `${currentPath}/${path}`
    }

    const segments = path.split('/')

    let back = 0

    for (let i = segments.length; i >= 0; i--) {
      if (segments[i] === '..') {
        segments.splice(i, 1)
        back++
        continue
      }

      if (back > 0) {
        segments.splice(i, 1)
        back--
        continue
      }

      if (segments[i] === '') {
        segments.splice(i, 1)
      }
    }

    return `/${segments.join('/')}`
  }

  return {getResolvedPath}
}

export type File = {
  type: 'file'
  name: string
  content: string
}

export type Script = {
  type: 'script'
  name: string
  content: string
  component: string
}

export type Dir = {
  type: 'dir'
  name: string
  paths: (Dir | File | Script)[]
}

type StartCommandParams = {
  argv: string[]
}

export const useProcessCommand = () => {
  const {currentPath, clearCommands, updateCurrentPath} = useConsoleStore()
  const {getResolvedPath} = usePathResolver()

  const processCommand = ({argv}: StartCommandParams): string => {
    switch (argv[0]) {
      case 'clear': {
        clearCommands()
        return ''
      }

      case 'help': {
        return HelpOutput.name
      }

      case 'ls': {
        try {
          const {dir: currentDir} = consoleLib.validatePathInDir({
            dir: rootDir,
            path: argv[1] ? argv[1] : currentPath,
          })

          return currentDir.paths
            .sort((a, b) =>
              a.type === 'dir'
                ? b.type === 'dir'
                  ? a.name.localeCompare(b.name)
                  : -1
                : 1
            )
            .map(({name}) => name)
            .join('\n')
        } catch (e) {
          return e as string
        }
      }

      case 'cat': {
        try {
          const resolvedPath = getResolvedPath(argv[1])

          const {fileName, filePath} = divideFileNameWithFilePath(resolvedPath)

          const {dir: searchDir} = consoleLib.validatePathInDir({
            dir: rootDir,
            path: filePath,
          })

          const file = searchDir.paths.find(({name}) => name === fileName)

          if (!file) {
            return 'file not found.'
          }

          if (file.type === 'dir') {
            return `${argv[1]}: is a directory`
          }

          return (file.content || '').trim()
        } catch (e) {
          return e as string
        }
      }

      case 'cd': {
        try {
          const resolvedPath = getResolvedPath(argv[1])

          consoleLib.validatePathInDir({
            dir: rootDir,
            path: resolvedPath,
          })

          updateCurrentPath(resolvedPath)

          return ''
        } catch (e) {
          return e as string
        }
      }

      case 'sh': {
        try {
          const resolvedPath = getResolvedPath(argv[1])

          const {fileName, filePath} = divideFileNameWithFilePath(resolvedPath)

          const {dir: searchDir} = consoleLib.validatePathInDir({
            dir: rootDir,
            path: filePath,
          })

          const file = searchDir.paths.find(({name}) => name === fileName)

          if (!file) {
            return 'file not found.'
          }

          if (file.type === 'dir') {
            return `${argv[1]}: is a directory`
          }

          if (file.type !== 'script') {
            return `${argv[1]}: is not a sh script`
          }

          return (file.component || '').trim()
        } catch (e) {
          return e as string
        }
      }

      default: {
        return `command not found: ${argv[0]}`
      }
    }
  }

  return {processCommand}
}
