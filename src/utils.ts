import moment, { type Moment } from 'moment'

export const getHumanDuration = (from: Moment, to: Moment) => {
  const duration = moment.duration(to.diff(from, 'M', true) + 1, 'M')

  if (duration.years() === 0) {
    return duration.humanize()
  }

  const years = duration.years() === 1 ? '1 year' : duration.humanize()
  const months = Math.floor(duration.months())

  return `${years} ${months} ${months > 0 ? 'months' : 'month'}`
}
