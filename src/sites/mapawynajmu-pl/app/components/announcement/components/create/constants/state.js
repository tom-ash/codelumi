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
  showPolishDescription: false,
  polishDescription: '',
  showEnglishDescription: false,
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

export const errors = {
  category: noError,
  map: noError,
  pictures: noError,
}
