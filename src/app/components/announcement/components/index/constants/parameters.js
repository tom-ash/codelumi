import { parseCategoryForUrl, reverseParseCategory } from '../../../functions/category-parsers'
import { parseDistrictForUrl, reverseParseDistrict } from '../../../functions/district-parsers'

export const parameters = [
  {
    state: 'category',
    api: 'category',
    polish: 'kategoria',
    english: 'category',
    value: function(categoryNumber) {
      return this.languageObjectHandler(parseCategoryForUrl(categoryNumber))
    },
    stateValue: categoryName => reverseParseCategory(categoryName)
  },
  {
    state: 'district',
    api: 'district',
    polish: 'dzielnica',
    english: 'district',
    value: districtNumber => parseDistrictForUrl(districtNumber),
    stateValue: districtName => reverseParseDistrict(districtName)
  },
  {
    state: 'rentCurrency',
    api: 'rentCurrency',
    polish: 'waluta_czynszu',
    english: 'rentCurrency',
    value: (value) => value,
    stateValue: (value) => parseInt(value)
  },
  {
    state: 'rentMin',
    api: 'min_netRentAmount',
    polish: 'min_czynsz',
    english: 'min_rent',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'rentMax',
    api: 'max_netRentAmount',
    polish: 'maks_czynsz',
    english: 'max_rent',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'areaMin',
    api: 'min_area',
    polish: 'min_powierzchnia',
    english: 'min_area',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'areaMax',
    api: 'max_area',
    polish: 'maks_powierzchnia',
    english: 'max_area',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'roomsMin',
    api: 'min_rooms',
    polish: 'min_pomieszczenia',
    english: 'min_rooms',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'roomsMax',
    api: 'max_rooms',
    polish: 'maks_pomieszczenia',
    english: 'max_rooms',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'floorMin',
    api: 'min_floor',
    polish: 'min_pietro',
    english: 'min_floor',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'floorMax',
    api: 'max_floor',
    polish: 'maks_pietro',
    english: 'max_floor',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'totalFloorsMin',
    api: 'min_totalFloors',
    polish: 'min_pietra_budynku',
    english: 'min_building_floors',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'totalFloorsMax',
    api: 'max_totalFloors',
    polish: 'maks_pietra_budynku',
    english: 'max_building_floors',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'page',
    api: 'page',
    polish: 'strona',
    english: 'page',
    value: (value) => value,
    stateValue: (value) => value
  },

  {
    state: 'availabilityDate',
    api: 'availabilityDate',
    polish: 'data dostępności',
    english: 'availability date',
    value: (value) => value,
    stateValue: (value) => value
  },
  {
    state: 'offset',
    api: 'offset',
  }
]
