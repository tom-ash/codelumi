import { features } from '../../../constants/features'
import { furnishings } from '../../../constants/furnishings'

const noError = { pl: '', en: '' }

function parseFeaturesForState() {
  let initialState = {}
  features.map(feature => {
    initialState[feature.ref] = false
  })
  return initialState
}

function parseFurnishingsForState() {
  let initialState = {}
  furnishings.map(furnishing => {
    initialState[furnishing.ref] = false
  })
  return initialState
}

export const control = {
  shouldInitializeMap: false,
  isMapInitialized: false,
  connecting: false,
  publishing: false,
  success: false,
  availabilityDateFocus: false,
  calendarMouseOver: false,
  addingPicture: false,
  addAvailabilityDate: false,
  showDescription: false,
  step: 'form',
}

export const inputs = {
  id: '',
  category: '',
  rentCurrency: 0,
  netRentAmount: '',
  grossRentAmount: '',
  area: '',
  rooms: '',
  availabilityDate: null,
  floor: '',
  totalFloors: '',
  blobs: [],
  picFiles: [],
  picUploads: [],
  addFeatures: false,
  features: parseFeaturesForState(),
  addFurnishings: false,
  furnishings: parseFurnishingsForState(),
  showPolish: false,
  polishDescription: '',
  showEnglish: false,
  englishDescription: '',
  latitude: null,
  longitude: null,
  verificationCode: '',
  locality: null,
  sublocality: null,
  name: null,
  link: null,
  adminControlled: null,
}

export const data = {
  netRentAmountPerSqm: null,
  grossRentAmount: null,
  grossRentAmountPerSqm: null,
  user: null,
}

export const errors = {
  category: noError,
  rentCurrency: noError,
  netRentAmount: noError,
  area: noError,
  rooms: noError,
  floor: noError,
  totalFloors: noError,
  availabilityDateSelect: noError,
  availabilityDate: noError,
  pictures: noError,
  map: noError,
}
