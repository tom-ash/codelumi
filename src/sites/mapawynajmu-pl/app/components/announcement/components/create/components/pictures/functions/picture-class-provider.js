export function pictureClassProvider(index) {
  if ((index + 1) % 3 === 0) return 'picture last'
  return 'picture'
}
