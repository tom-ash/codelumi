import { params } from '../../../../../constants/params'
import { reverseParseCategory } from '../../../../../functions/category-parsers'
import { reverseParseDistrict } from '../../../../../functions/district-parsers'
import { reverseParseCurrency } from '../../../../../functions/currency-parsers'

export function paramsReader() {
  const { changeControl, changeInputs } = this.props
  let urlParams = window.location.search.replace('?', '').split('&')
  let urlParamsObject = {}
  let stateParams = {}
  urlParams = urlParams.map(param => {
    const splittedParam = param.split('=')
    urlParamsObject[splittedParam[0]] = splittedParam[1]
  })
  Object.keys(params).map(paramKey => {
    const paramUrlKey = params[paramKey].url
    Object.keys(urlParamsObject).map(urlParam => {
      if (urlParam === paramUrlKey.english || urlParam === paramUrlKey.polish) {
        const value = urlParamsObject[urlParam]
        const min = value.match(/min_\d*/)
        let max = value.match(/max_\d*/)
        max = max || value.match(/maks_\d*/)
        if (min) stateParams[`${paramKey}Min`] = +min[0].split('_')[1]
        if (max) stateParams[`${paramKey}Max`] = +max[0].split('_')[1]
        if (paramKey == 'rent') {
          const currency = value.match(/PLN|EUR|USD/)
          if (currency) stateParams['rentCurrency'] = reverseParseCurrency(currency[0])
        }
        if (paramKey == 'category') stateParams[paramKey] = reverseParseCategory(value)
        if (paramKey == 'district') stateParams[paramKey] = reverseParseDistrict(value)
        if (paramKey == 'availabilityDate') stateParams[paramKey] = value
      }
    })
  })
  changeInputs(stateParams)
  changeControl({
    readParams: false,
    fetch: true
  })
}