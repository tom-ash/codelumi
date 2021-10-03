export function componentDidUpdate(prevProps) {
  const { rebuildQueryParams: prevRebuildQueryParams } = prevProps
  const { rebuildQueryParams, changeControl } = this.props

  if (!prevRebuildQueryParams && rebuildQueryParams) {
    const queryParamMappings = {
      areaMin: { pl: 'powierzchnia_min', en: 'area_min' },
      areaMax: { pl: 'powierzchnia_max', en: 'area_max' },
    }

    const queryAttrs = ['areaMin', 'areaMax']
    const builtQueryParamsArray = queryAttrs.filter(queryParam => {
      const queryParamValue = this.props[queryParam]

      return queryParamValue !== ''
    }).map(filteredQueryAttr => {
      const queryParam = this.langHandler(queryParamMappings[filteredQueryAttr])
      const queryParamValue = this.props[filteredQueryAttr]

      return `${queryParam}=${queryParamValue}`
    })

    const pathnameWithQueryParams = window.location.pathname + '?' + builtQueryParamsArray.join('&')

    history.pushState(null, '', pathnameWithQueryParams)

    return changeControl({ rebuildQueryParams: false, fetch: true })
  }

  const { fetch: prevFetch } = prevProps
  const { fetch } = this.props

  if (!prevFetch && fetch) {
    // TODO
    changeControl({ fetch: false })
  }

}
