export function HeaderProvider({ TODO, TODO, languageObjectHandler }) {
  if (TODO) {
    return languageObjectHandler({
      pl: 'Katalog nieruchomości na wynajem w Warszawie',
      en: 'Catalogue of Real Estate Lease in Warsaw'
    })
  }
  if (TODO) {
    return languageObjectHandler({
      pl: 'Mapa nieruchomości na wynajem w Warszawie',
      en: 'Map of Real Estate Lease in Warsaw'
    })
  }

  return null
}
