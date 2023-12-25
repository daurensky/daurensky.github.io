import {Dir} from './model'

type FindInDirParams = {
  path: string
  dir: Dir
}

export const validatePathInDir = ({path, dir}: FindInDirParams) => {
  const segments = path.split('/').filter(segment => segment !== '')

  for (const segment of segments) {
    const searchDir = dir.paths.find(currentDir => currentDir.name === segment)

    if (!searchDir) {
      throw `no such file or directory: ${segment}`
    }

    if (searchDir.type !== 'dir') {
      throw `not a directory: ${segment}`
    }

    dir = searchDir
  }

  return {dir}
}

export const divideFileNameWithFilePath = (path: string) => {
  const segments = path.split('/')

  const fileName = segments[segments.length - 1]
  const filePath = segments.slice(0, segments.length - 1).join('/')

  return {fileName, filePath}
}
