export function parseAvailabilityDate(availabilityDate) {
  if (availabilityDate == 'now') return nowProvider.call(this)
  if (Date.parse(availabilityDate) < new Date().getTime()) return nowProvider.call(this)
  return availabilityDate
}

function nowProvider() {
  return this.languageHandler('Teraz', 'Now')
}
