import { parseCurrency } from '../../../../../../../functions/currency-parsers'

export function subInputValueParser(input) {
  const articleMin = '≥'
  const articleMax = '≤'
  const min = this.props[`${input}Min`]
  const max = this.props[`${input}Max`]
  let value = ''
  if (min !== '' && max !== '') value =`${min} - ${max}`
  if (min !== '' && max === '') value = `${articleMin} ${min}`
  if (min === '' && max !== '') value = `${articleMax} ${max}`
  if (min === max) value = min
  if (input === 'area' && value !== '') value += this.languageHandler(' m2', ' sqm')
  if (input === 'rent') {
    const { rentCurrency } = this.props
    let parsedCurrency = ''
    if (rentCurrency !== '') {
      parsedCurrency = ` ${parseCurrency(rentCurrency)}`
      value += parsedCurrency
    }
    if (value !== '' && value.length !== parsedCurrency.length) value += this.languageHandler(' netto / mc', ' net / mo')
  } else if (input == 'rooms') {
    if (value !== '') value += this.languageObjectHandler(roomsProvider(min, max))
  } else if (input == 'floor') {
    if (value !== '') value = this.languageObjectHandler(floorsProvider(value, min, max))
  } else if (input == 'totalFloors') {
    if (value !== '') value = this.languageObjectHandler(totalFloorsProvider(value, min, max))
  }
  return value
}

function roomsProvider(min, max) {
  if (min && !max || max) {
    const value = max || min
    if (value == 1) return { pl: ` pomieszczenie`, en: ' room' }
    if ([12, 13, 14].indexOf(value) !== -1) return { pl: ` pomieszczeń`, en: ' rooms' }
    if ([2, 3, 4].indexOf(value % 10) !== -1) return { pl: ` pomieszczenia`, en: ' rooms' }
  }
  return { pl: ' pomieszczeń', en: 'rooms' }
}

function floorsProvider(value, min, max) {
  if (max === -1) return { pl: `Podziemie`, en: 'Underground' }  
  if (min === 0 && max === 0) return { pl: `Parter`, en: 'Groundfloor' }
  if (max === 0) return { pl: `Podziemie lub parter`, en: 'Underground or groundfloor' }
  if (min === 0 && max === '') return { pl: `≥ Parter`, en: '≥ Groundfloor' }

  return { pl: `${value} piętro`, en: `${value} floor` }
}

function totalFloorsProvider(value, min, max) {
  if (max === -1) return { pl: `Budynek podziemny`, en: 'Underground building' } 
  if (min === 0 && max === 0) return { pl: `Budynek parterowy`, en: 'Groundfloor building' }
  if (max === 0) return { pl: `≤ Budynek parterowy`, en: '≤ Groundfloor building' }
  if (min === 0 && max === '') return { pl: `≥ Budynek parterowy`, en: '≥ Groundfloor building' }

  if (min === -1 && max > 0) {
    if (max === 1) return { pl: `≤ ${max} piętro budynku`, en: `≤ ${max} building floors` }
    if ([12, 13, 14].indexOf(max) !== -1) return { pl: `≤ ${max} pięter budynku`, en: `≤ ${max} building floors` }
    if ([2, 3, 4].indexOf(max % 10) !== -1) return { pl: `≤ ${max} piętra budynku`, en: `≤ ${max} building floors` }
    return { pl: `≤ ${max} pięter budynku`, en: `≤ ${max} building floors` }
  }

  if (min !== '' || max !== '') {
    const minMax = max || min
    if (minMax === 1) return { pl: `${value} piętro budynku`, en: `${value} building floors` }
    if ([12, 13, 14].indexOf(minMax) !== -1) return { pl: `${value} pięter budynku`, en: `${value} building floors` }
    if ([2, 3, 4].indexOf(minMax % 10) !== -1) return { pl: `${value} piętra budynku`, en: `${value} building floors` }
    return { pl: `${value} pięter budynku`, en: `${value} building floors` }
  }
}
