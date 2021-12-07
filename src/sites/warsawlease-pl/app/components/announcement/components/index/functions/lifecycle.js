import buildUrl from '../../../../../../shared/functions/builders/url.js'

export function componentDidUpdate(prevProps) {
  const { rebuildQueryParams: prevRebuildQueryParams } = prevProps
  const { rebuildQueryParams, changeControl, changeInputs } = this.props

  if (!prevRebuildQueryParams && rebuildQueryParams) {
    changeControl({ rebuildQueryParams: false })

    const updateAttrs = {}
    const queryParamMappings = {
      areaMinInput: { pl: 'powierzchnia_min', en: 'area_min' },
      areaMaxInput: { pl: 'powierzchnia_max', en: 'area_max' },
    }
    const queryAttrs = ['areaMinInput', 'areaMaxInput']
    const builtQueryParamsArray = queryAttrs.filter(queryParam => {
      const queryParamValue = this.props[queryParam]
      
      updateAttrs[queryParam.replace('Input', '')] = queryParamValue

      return queryParamValue !== ''
    }).map(filteredQueryAttr => {
      const queryParam = this.langHandler(queryParamMappings[filteredQueryAttr])
      const queryParamValue = this.props[filteredQueryAttr]

      return `${queryParam}=${queryParamValue}`
    })

    const { changeRoute } = this.context
    const path = window.location.pathname.replace(/^\//, '') + '?' + builtQueryParamsArray.join('&')
    const href = buildUrl({ path })

    changeInputs(updateAttrs)
    changeRoute({ href })
  }
}
