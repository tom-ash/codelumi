import { parseCurrency } from '../../../functions/currency-parsers'

export function subInputValueParser(input) {
  const articleMin = '≥'
  const articleMax = '≤'
  const min = this.props[`${input}Min`]
  const max = this.props[`${input}Max`]
  let value = ''
  if (min && max) value =`${min} - ${max}`
  if (min && !max) value = `${articleMin} ${min}`
  if (!min && max) value = `${articleMax} ${max}`
  if (input == 'area' && value != '') value += this.languageHandler(' m2', ' sqm')
  if (input == 'rent') {
    const { rentCurrency } = this.props
    if (rentCurrency !== '') value += ` ${parseCurrency(rentCurrency)}`
  }
  return value
}