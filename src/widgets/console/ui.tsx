import {OutputProxy} from '@/entities/outputs'
import {HelpOutput} from '@/entities/outputs/ui/help'
import {EnterCommand} from '@/features/enter-command'
import {consoleModel} from '../../entities/console'
import {getLocaleDate} from '../../shared/lib/date'

export const Console = () => {
  const {commands} = consoleModel.useConsoleStore()

  return (
    <div className="bg-black text-gray-300 rounded-xl leading-8">
      <ul className="p-8 border-b border-gray-900 h-[600px] overflow-auto scrollbar-hide flex flex-col-reverse gap-2">
        {commands.map(({id, stdin, stdout, createdAt, path}) => (
          <li key={id}>
            <div className="font-mono inline-flex items-center gap-2 text-sm">
              <span>
                <span className="text-blue-300">{path}</span>$
              </span>
              <span>{stdin}</span>
              <span className="text-xs text-gray-600">
                ({getLocaleDate(createdAt)})
              </span>
            </div>
            {stdout && (
              <div className="font-mono text-gray-400 text-sm whitespace-pre-line leading-relaxed">
                <OutputProxy output={stdout} fallback={stdout} />
              </div>
            )}
          </li>
        ))}
        <li className="font-mono text-gray-400 text-sm whitespace-pre-line leading-relaxed space-y-1">
          <p>
            <span className="text-white">
              hello I&apos;m Dauren, welcome to my website
            </span>{' '}
            <img
              src="/img/man-technologist.png"
              alt=""
              className="w-[18px] inline"
            />
          </p>
          <HelpOutput />
        </li>
      </ul>
      <EnterCommand />
    </div>
  )
}
