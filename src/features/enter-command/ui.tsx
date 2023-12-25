import {consoleLib, consoleModel} from '@/entities/console'
import {rootDir} from '@/entities/console/data'
import {FormEvent, KeyboardEvent, useState} from 'react'

export const EnterCommand = () => {
  const {addCommand, clearCommands, currentPath} =
    consoleModel.useConsoleStore()
  const {getResolvedPath} = consoleModel.usePathResolver()
  const {processCommand} = consoleModel.useProcessCommand()

  const [commandText, setCommandText] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (commandText === '') {
      return
    }

    setCommandText('')

    const output = processCommand({
      argv: commandText.split(' '),
    })

    addCommand({stdin: commandText, stdout: output})
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'k' && e.metaKey) {
      clearCommands()
      return
    }

    if (e.key === 'Tab') {
      try {
        e.preventDefault()

        const commands = commandText.split(' ')
        const lastCommand = commands[commands.length - 1]

        const paths = lastCommand.split('/')
        const lastPath = paths[paths.length - 1]

        const {dir} = consoleLib.validatePathInDir({
          dir: rootDir,
          path: `${currentPath}/${paths.slice(0, paths.length - 1)}`,
        })

        const searchDirs = dir.paths.filter(({name}) => name.includes(lastPath))

        if (searchDirs.length === 1) {
          const searchPath = searchDirs[0].name.substring(lastPath.length)
          const trailingSlash = searchDirs[0].type === 'dir' ? '/' : ''

          setCommandText(prev => `${prev}${searchPath}${trailingSlash}`)
        }
      } catch {
        /* empty */
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <div className="font-mono text-sm pl-8">
        <span className="text-blue-300">{currentPath}</span>$
      </div>
      <input
        type="text"
        value={commandText}
        onChange={e => setCommandText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="enter commands here..."
        className="bg-transparent w-full pl-2 pr-8 py-4 outline-none placeholder:text-gray-500 font-mono text-sm"
        autoFocus
        spellCheck={false}
      />
    </form>
  )
}
