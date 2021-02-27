export function HeaderProvider({ renderMap, renderCatalogue, langHandler }) {
  if (renderCatalogue) {
    return langHandler({
      pl: 'Katalog nieruchomości na wynajem w Warszawie',
      en: 'Catalogue of Real Estate Lease in Warsaw'
    })
  }
  if (renderMap) {
    return langHandler({
      pl: 'Mapa nieruchomości na wynajem w Warszawie',
      en: 'Map of Real Estate Lease in Warsaw'
    })
  }

  return null
}
