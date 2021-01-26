export function HeaderProvider({ renderMap, renderCatalogue, langObjHandler }) {
  if (renderCatalogue) {
    return langObjHandler({
      pl: 'Katalog nieruchomości na wynajem w Warszawie',
      en: 'Catalogue of Real Estate Lease in Warsaw'
    })
  }
  if (renderMap) {
    return langObjHandler({
      pl: 'Mapa nieruchomości na wynajem w Warszawie',
      en: 'Map of Real Estate Lease in Warsaw'
    })
  }

  return null
}
