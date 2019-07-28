import { months } from '../../../../../../../constants/months'

export function parseAvailabilityDate(unparsedDate) {
  if (!unparsedDate) return
  if (unparsedDate === 'now') return this.languageHandler('Teraz', 'Now')
  const year = unparsedDate.substring(0, 4)
  const month = unparsedDate.substring(5, 7).replace('0', '')
  const day = unparsedDate.substring(8, 10).replace('0', '')
  return this.languageHandler(`${day} ${months[month].polishGenitive} ${year}`,
                              `${months[month].english} ${day}, ${year}`)
}

