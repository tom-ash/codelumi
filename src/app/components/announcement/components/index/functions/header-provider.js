export function HeaderProvider({ renderMap, renderCatalogue, languageObjectHandler }) {
  if (renderCatalogue) {
    return languageObjectHandler({
      pl: 'Katalog nieruchomości na wynajem w Warszawie',
      en: 'Catalogue of Real Estate Lease in Warsaw'
    })
  }
  if (renderMap) {
    return languageObjectHandler({
      pl: 'Mapa nieruchomości na wynajem w Warszawie',
      en: 'Map of Real Estate Lease in Warsaw'
    })
  }

  return null
}
