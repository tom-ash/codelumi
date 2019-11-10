import { parseCurrency } from '../../../functions/currency-parsers'

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
    if (value == 1) return { polish: ` pomieszczenie`, english: ' room' }
    if ([12, 13, 14].indexOf(value) !== -1) return { polish: ` pomieszczeń`, english: ' rooms' }
    if ([2, 3, 4].indexOf(value % 10) !== -1) return { polish: ` pomieszczenia`, english: ' rooms' }
  }
  return { polish: ' pomieszczeń', english: 'rooms' }
}

function floorsProvider(value, min, max) {
  if (max === -1) return { polish: `Podziemie`, english: 'Underground' }  
  if (min === 0 && max === 0) return { polish: `Parter`, english: 'Groundfloor' }
  if (max === 0) return { polish: `Podziemie lub parter`, english: 'Underground or groundfloor' }
  if (min === 0 && max === '') return { polish: `≥ Parter`, english: '≥ Groundfloor' }

  return { polish: `${value} piętro`, english: `${value} floor` }
}

function totalFloorsProvider(value, min, max) {
  if (max === -1) return { polish: `Budynek podziemny`, english: 'Underground building' } 
  if (min === 0 && max === 0) return { polish: `Budynek parterowy`, english: 'Groundfloor building' }
  if (max === 0) return { polish: `≤ Budynek parterowy`, english: '≤ Groundfloor building' }
  if (min === 0 && max === '') return { polish: `≥ Budynek parterowy`, english: '≥ Groundfloor building' }

  if (min === -1 && max > 0) {
    if (max === 1) return { polish: `≤ ${max} piętro budynku`, english: `≤ ${max} building floors` }
    if ([12, 13, 14].indexOf(max) !== -1) return { polish: `≤ ${max} pięter budynku`, english: `≤ ${max} building floors` }
    if ([2, 3, 4].indexOf(max % 10) !== -1) return { polish: `≤ ${max} piętra budynku`, english: `≤ ${max} building floors` }
    return { polish: `≤ ${max} pięter budynku`, english: `≤ ${max} building floors` }
  }

  if (min !== '' || max !== '') {
    const minMax = max || min
    if (minMax === 1) return { polish: `${value} piętro budynku`, english: `${value} building floors` }
    if ([12, 13, 14].indexOf(minMax) !== -1) return { polish: `${value} pięter budynku`, english: `${value} building floors` }
    if ([2, 3, 4].indexOf(minMax % 10) !== -1) return { polish: `${value} piętra budynku`, english: `${value} building floors` }
    return { polish: `${value} pięter budynku`, english: `${value} building floors` }
  }
}
