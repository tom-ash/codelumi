export function HeaderProvider({ showCatalogue, showMap, languageObjectHandler }) {
  if (showCatalogue) {
    return languageObjectHandler({
      pl: 'Katalog nieruchomości na wynajem w Warszawie',
      en: 'Catalogue of Real Estate Lease in Warsaw'
    })
  }
  if (showMap) {
    return languageObjectHandler({
      pl: 'Mapa nieruchomości na wynajem w Warszawie',
      en: 'Map of Real Estate Lease in Warsaw'
    })
  }

  return null
}
