export function rentPerSqmCounter(rentAmount, area) {
  return Math.round((rentAmount / area) * 100) / 100
}