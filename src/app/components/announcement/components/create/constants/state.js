import { features } from '../../../constants/features'
import { furnishings } from '../../../constants/furnishings'

const noError = { polish: '', english: '' }

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
  addingPicture: false
}

export const inputs = {
  id: '',
  category: '',
  district: '',
  rentCurrency: '',
  netRentAmount: '',
  additionalFees: '',
  area: '',
  rooms: '',
  availabilityDateSelect: '',
  availabilityDate: '',
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
  rentNetPerSqm: null,
  rentGross: null,
  rentGrossPerSqm: null
}

export const errors = {
  category: noError,
  district: noError,
  rentCurrency: noError,
  netRentAmount: noError,
  additionalFees: noError,
  area: noError,
  rooms: noError,
  floor: noError,
  totalFloors: noError,
  availabilityDateSelect: noError,
  availabilityDate: noError,
  pictures: noError,
  map: noError
}
