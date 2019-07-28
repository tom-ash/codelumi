export function handleAvailabilityDate() {
  if (this.props.availabilityDateSelect === 'now') return 'now'
  return this.props.availabilityDate
}