export function parseAvailabilityDate(availabilityDate) {
  const { selectedAvailabilityDate } = this.props
  if (availabilityDate == 'now') return nowProvider.call(this)
  const availabilityDateAsInt = Date.parse(availabilityDate)
  if (selectedAvailabilityDate && availabilityDateAsInt < Date.parse(selectedAvailabilityDate)) {
    return nowProvider.call(this)
  }
  if (availabilityDateAsInt < new Date().getTime()) return nowProvider.call(this)
  return availabilityDate
}

function nowProvider() {
  return this.languageHandler('Dostępne teraz', 'Available Now')
}