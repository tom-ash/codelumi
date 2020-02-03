export function floorParser(floorNumber) {
  if (floorNumber === -1) return this.languageObjectHandler({ pl: 'Podziemie', en: 'Underground' })
  if (floorNumber === 0) return this.languageObjectHandler({ pl: 'Parter', en: 'Groundfloor' })

  return `${floorNumber} ${this.languageObjectHandler({ pl: 'piętro', en: 'floor' })}`
}
