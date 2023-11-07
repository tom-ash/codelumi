import { changeUrl } from '../../../../../../../shared/app/functions/routes/changers/change-url'

export function componentDidUpdate(prevProps) {
  const { rebuildQueryParams: prevRebuildQueryParams } = prevProps
  const { rebuildQueryParams, setControl } = this.props

  if (!prevRebuildQueryParams && rebuildQueryParams) {
    window.areListingsObsolete = true

    setControl({ rebuildQueryParams: false })

    const queryParamMappings = {
      areaMin: { pl: 'powierzchnia_min', en: 'area_min' },
      areaMax: { pl: 'powierzchnia_max', en: 'area_max' },
      priceMin: { pl: 'cena_min', en: 'price_min' },
      priceMax: { pl: 'cena_maks', en: 'price_max' },
      lat: { pl: 'lat', en: 'lat' },
      lng: { pl: 'lng', en: 'lng' },
      location: { pl: 'lokalizacja', en: 'location' },
    }

    const queryAttrs = ['areaMin', 'areaMax', 'priceMin', 'priceMax', 'lat', 'lng', 'location']
    const builtQueryParamsArray = queryAttrs
      .filter(queryParam => {
        const queryParamValue = this.props[queryParam]

        return queryParamValue
      })
      .map(filteredQueryAttr => {
        const queryParam = queryParamMappings[filteredQueryAttr]['pl']
        const queryParamValue = this.props[filteredQueryAttr]

        return `${queryParam}=${queryParamValue}`
      })

    const href = window.location.pathname.replace(/^\//, '') + '?' + builtQueryParamsArray.join('&')

    changeUrl({ href })
  }
}
