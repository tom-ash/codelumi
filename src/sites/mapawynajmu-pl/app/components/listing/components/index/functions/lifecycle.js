import { buildUrl } from '../../../../../../shared/functions/builders/url'
import { updateUrl } from '../../../../../../../shared/app/functions/routes/updaters/update-url'

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
    }
    const queryAttrs = ['areaMin', 'areaMax', 'priceMin', 'priceMax']
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

    const path = window.location.pathname.replace(/^\//, '') + '?' + builtQueryParamsArray.join('&')
    const href = buildUrl({ path })

    if (href[href.length - 1] === '?') {
      updateUrl({ href: '/' })
    } else {
      updateUrl({ href })
    }
  }
}
