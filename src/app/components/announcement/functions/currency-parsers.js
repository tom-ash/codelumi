import { currencies } from '../constants/currencies'

export function parseCurrency(currencyNumber) {
  if (currencyNumber === null || currencyNumber === undefined) return
  return currencies.find(currency => currency.value === currencyNumber).text
}