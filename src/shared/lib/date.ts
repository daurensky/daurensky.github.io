export const getLocaleDate = (date: Date) => {
  const localeDate = new Date(date).toLocaleString()
  const curretLocaleDate = new Date().toLocaleDateString()
  return localeDate.replace(curretLocaleDate, 'Today')
}
