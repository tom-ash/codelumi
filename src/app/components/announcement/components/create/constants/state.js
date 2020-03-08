import { features } from '../../../constants/features'
import { furnishings } from '../../../constants/furnishings'

const noError = { pl: '', en: '' }

function parseFeaturesForState() {
  let initialState = {}
  features.map(feature => { initialState[feature.ref] = false })
  return initialState
}

function parseFurnishingsForState() {
  let initialState = {}
  furnishings.map(furnishing => { initialState[furnishing.ref] = false })
  return initialState
}

export const control = {
  mapLoaded: false,
  connecting: false,
  publishing: false,
  success: false,
  editing: false,
  availabilityDateFocus: false,
  calendarMouseOver: false,
  addingPicture: false,
  showAvilabilityDate: false
}

export const inputs = {
  id: '',
  category: 2,
  district: '',
  rentCurrency: 0,
  netRentAmount: '',
  grossRentAmount: '',
  area: '',
  rooms: '',
  availabilityDate: null,
  floor: '',
  totalFloors: '',
  pictureBlobs: [],
  pictureFiles: [],
  pictureUploads: [],
  features: parseFeaturesForState(),
  furnishings: parseFurnishingsForState(),
  descriptionPolish: '',
  descriptionEnglish: '',
  mapLatitude: null,
  mapLongitude: null
}

export const data = {
  netRentAmountPerSqm: null,
  grossRentAmount: null,
  grossRentAmountPerSqm: null
}

export const errors = {
  category: noError,
  district: noError,
  rentCurrency: noError,
  netRentAmount: noError,
  area: noError,
  rooms: noError,
  floor: noError,
  totalFloors: noError,
  availabilityDateSelect: noError,
  availabilityDate: noError,
  pictures: noError,
  map: noError
}
