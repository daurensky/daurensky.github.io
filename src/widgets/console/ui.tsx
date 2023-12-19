import {FormEvent, useState} from 'react'
import {consoleModel} from '../../entities/console'
import {getLocaleDate} from '../../shared/lib/date'

export const Console = () => {
  const {commands, addCommand, clearCommands, currentPath, setCurrentPath} =
    consoleModel.useConsoleStore()
  const [commandText, setCommandText] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (commandText === '') {
      return
    }

    setCommandText('')

    const argv = commandText.split(' ')

    if (argv[0] === 'clear') {
      clearCommands()
      return
    }

    if (argv[0] === 'hi') {
      addCommand({stdin: commandText, stdout: 'hello!'})
      return
    }

    if (argv[0] === 'ls') {
      addCommand({
        stdin: commandText,
        stdout: consoleModel.directories
          .sort((a, b) =>
            a.type === 'folder'
              ? b.type === 'folder'
                ? a.name.localeCompare(b.name)
                : -1
              : 1
          )
          .map(({name}) => name)
          .join('\n'),
      })
      return
    }

    if (argv[0] === 'cat') {
      const file = consoleModel.directories.find(({name}) => name === argv[1])

      if (!file) {
        addCommand({
          stdin: commandText,
          stdout: 'file not found.',
        })
        return
      }

      if (file.type === 'folder') {
        addCommand({
          stdin: commandText,
          stdout: `${argv[1]}: is a directory`,
        })
        return
      }

      addCommand({
        stdin: commandText,
        stdout: (file.content || '').trim(),
      })
      return
    }

    if (argv[0] === 'cd') {
      const path = `~/${argv[1]}`

      addCommand({
        stdin: commandText,
        stdout: '',
        path,
      })
      setCurrentPath(path)
      return
    }

    addCommand({stdin: commandText, stdout: 'command not found :('})
  }

  return (
    <div className="bg-black text-gray-300 rounded-xl leading-8">
      <ul className="p-8 border-b border-gray-900 h-96 overflow-auto scrollbar-hide flex flex-col-reverse gap-2">
        {commands.map(({id, stdin, stdout, createdAt}) => (
          <li key={id}>
            <code className="inline-flex items-center gap-2 text-sm">
              <span>
                <span className="text-blue-300">{currentPath}</span>$
              </span>
              <span>{stdin}</span>
              <span className="text-xs text-gray-600">
                ({getLocaleDate(createdAt)})
              </span>
            </code>
            <code className="block text-gray-400 text-sm whitespace-pre-line leading-relaxed">
              {stdout}
            </code>
          </li>
        ))}
        <li>
          <code className="block text-gray-400 text-sm whitespace-pre-line leading-relaxed">
            hello I&apos;m Dauren, welcome to my website{' '}
            <img
              src="/img/man-technologist.png"
              alt=""
              className="w-[18px] inline"
            />
          </code>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={commandText}
          onChange={e => setCommandText(e.target.value)}
          onKeyDown={e => e.key === 'k' && e.metaKey && clearCommands()}
          placeholder="write commands here..."
          className="bg-transparent w-full px-8 py-4 outline-none placeholder:text-gray-500 font-mono text-sm"
          autoFocus
        />
      </form>
    </div>
  )
}
