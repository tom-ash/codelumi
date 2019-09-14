import { currencies } from '../constants/currencies'

export function parseCurrency(currencyNumber) {
  if (currencyNumber === null || currencyNumber === undefined) return
  return currencies.find(currency => currency.value === currencyNumber).text
}

export function reverseParseCurrency(currancyName) {
  if (currancyName === null || currancyName === undefined) return
  const foundCurrency = currencies.find(currency => currency.text === currancyName)
  if (!foundCurrency) return null
  return foundCurrency.value
}