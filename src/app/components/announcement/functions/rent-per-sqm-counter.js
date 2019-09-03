export function rentPerSqmCounter(netRentAmount, area) {
  return Math.round((netRentAmount / area) * 100) / 100
}