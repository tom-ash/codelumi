export function componentDidUpdate(prevProps) {
  const { rebuildQueryParams: prevRebuildQueryParams } = prevProps
  const { rebuildQueryParams, changeControl } = this.props

  if (!prevRebuildQueryParams && rebuildQueryParams) {
    changeControl({ rebuildQueryParams: false })

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

    const href = window.location.pathname + '?' + builtQueryParamsArray.join('&')
    const { changeRoute } = this.context

    changeRoute({ href })
  }
}
