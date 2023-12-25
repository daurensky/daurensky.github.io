export const HelpOutput = () => {
  return (
    <code className="block bg-white/10 p-4 rounded-md whitespace-pre-wrap">
      <table>
        <tbody>
          {[
            {command: 'ls', description: 'Show directories and files'},
            {command: 'cd', description: 'Open directory'},
            {command: 'cat', description: 'Show file content'},
            {command: 'sh', description: 'Run sh scripts'},
          ].map(({command, description}) => (
            <tr key={command}>
              <td width={60}>{command}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </code>
  )
}
