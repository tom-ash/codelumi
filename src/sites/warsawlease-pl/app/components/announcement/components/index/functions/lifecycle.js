export function componentDidUpdate(prevProps) {
  const { rebuildQueryParams: prevRebuildQueryParams } = prevProps
  const { rebuildQueryParams, changeControl } = this.props

  if (!prevRebuildQueryParams && rebuildQueryParams) {
    changeControl({ rebuildQueryParams: false })

    const queryParams = ['areaMin', 'areaMax']
    const builtQueryParamsArray = queryParams.filter(queryParam => {
      const queryParamValue = this.props[queryParam]

      return queryParamValue !== ''
    }).map(queryParam => {
      const queryParamValue = this.props[queryParam]
      return `${queryParam}=${queryParamValue}`
    })

    const pathnameWithQueryParams = window.location.pathname + '?' + builtQueryParamsArray.join('&')
    
    history.pushState(null, '', pathnameWithQueryParams)
  }
}
