export function floorsProvider() {
  const floors = [
    { value: '', text: '' },
    { value: -1, text: 'Podziemie' }, // TODO: LANG! 'Underground'
    { value: 0, text: 'Parter' }, // TODO: LANG! 'Groundfloor'
  ]

  return floors.concat(
    Array(99)
      .fill()
      .map((_, index) => ({ value: index + 1, text: `${index + 1}` }))
  )
}
