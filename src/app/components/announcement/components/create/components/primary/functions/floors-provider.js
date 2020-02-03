export function floorsProvider() {
  const floors = [
    { value: '', text: '' },
    { value: -1, text: this.languageObjectHandler({ pl: 'Podziemie', en: 'Underground' }) },
    { value: 0, text: this.languageObjectHandler({ pl: 'Parter', en: 'Groundfloor' }) },
  ]

  return floors.concat(Array(99).fill().map((_, index) => (
    { value: index + 1, text: `${index + 1}` }))
  )
}
