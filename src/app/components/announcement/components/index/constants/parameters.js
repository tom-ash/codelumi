import { parseCategoryForUrl, reverseParseCategory } from '../../../functions/category-parsers'
import { parseDistrictForUrl, reverseParseDistrict } from '../../../functions/district-parsers'

export const parameters = [
  {
    state: 'category',
    api: 'category',
    pl: 'kategoria',
    en: 'category',
    value: function(categoryNumber) {
      return this.langObjHandler(parseCategoryForUrl(categoryNumber))
    },
    stateValue: categoryName => reverseParseCategory(categoryName)
  },
  {
    state: 'district',
    api: 'district',
    pl: 'dzielnica',
    en: 'district',
    value: districtNumber => parseDistrictForUrl(districtNumber),
    stateValue: districtName => reverseParseDistrict(districtName)
  },
  {
    state: 'rentCurrency',
    api: 'rentCurrency',
    pl: 'waluta_czynszu',
    en: 'rentCurrency',
    value: value => value,
    stateValue: value => parseInt(value)
  },
  {
    state: 'rentMin',
    api: 'minRent',
    pl: 'min_czynsz',
    en: 'min_rent',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'rentMax',
    api: 'maxRent',
    pl: 'maks_czynsz',
    en: 'max_rent',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'areaMin',
    api: 'min_area',
    pl: 'min_powierzchnia',
    en: 'min_area',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'areaMax',
    api: 'max_area',
    pl: 'maks_powierzchnia',
    en: 'max_area',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'roomsMin',
    api: 'min_rooms',
    pl: 'min_pomieszczenia',
    en: 'min_rooms',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'roomsMax',
    api: 'max_rooms',
    pl: 'maks_pomieszczenia',
    en: 'max_rooms',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'floorMin',
    api: 'min_floor',
    pl: 'min_pietro',
    en: 'min_floor',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'floorMax',
    api: 'max_floor',
    pl: 'maks_pietro',
    en: 'max_floor',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'totalFloorsMin',
    api: 'min_totalFloors',
    pl: 'min_pietra_budynku',
    en: 'min_building_floors',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'totalFloorsMax',
    api: 'max_totalFloors',
    pl: 'maks_pietra_budynku',
    en: 'max_building_floors',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'page',
    api: 'page',
    pl: 'strona',
    en: 'page',
    value: value => value,
    stateValue: value => value
  },

  {
    state: 'availabilityDate',
    api: 'availabilityDate',
    pl: 'data dostępności',
    en: 'availability date',
    value: value => value,
    stateValue: value => value
  },
  {
    state: 'offset',
    api: 'offset',
  }
]
