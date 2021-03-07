import API_URL from '../../../../../../shared/constants/urls/api.js'
import { features } from '../../../constants/features'
import { furnishings } from '../../../constants/furnishings'
import { getAccessToken } from '../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function getAnnouncement() {
  const id = this.props.id || +window.location.pathname.match(/\d+/)[0]

  const access_token = getAccessToken()
  fetch(`${API_URL}/announcements/${id}/edit`, {
    headers: {
      'Content-Type': 'application/json',
      access_token
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    }
  })
  .then(json => {
    const {
      changeControl,
      changeInputs,
      changeData
    } = this.props
    const {
      id,
      category,
      district, 
      rentCurrency,
      netRentAmount,
      grossRentAmount,
      area,
      rooms,
      floor,
      totalFloors,
      pictures,
      features,
      furnishings,
      polishDescription,
      englishDescription, 
      latitude,
      longitude,
      availabilityDate
    } = json

    setBlobs.call(this, id, pictures)

    let announcementInputs = {
      id,
      category,
      district,
      rentCurrency,
      netRentAmount,
      grossRentAmount,
      area,
      rooms,
      floor,
      totalFloors,
      features: parseFeatures(features),
      furnishings: parseFurnishings(furnishings),
      polishDescription: polishDescription || '',
      englishDescription: englishDescription || '',
      latitude: latitude,
      longitude: longitude,
      ...features && features.length && { addFeatures: true },
      ...furnishings && furnishings.length && { addFurnishings: true },
      ...polishDescription && { addPolishDescription: true },
      ...englishDescription && { addEnglishDescription: true },
    }

    changeData({ id })
    changeInputs(appendAvailabilityDate(availabilityDate, announcementInputs))
    if (availabilityDate) changeControl({ showAvilabilityDate: true })
  })
}

function appendAvailabilityDate(availabilityDate, announcementInputs) {
  if (availabilityDate == 'now') {
    announcementInputs.availabilityDateSelect = 'now'
  } else {
    announcementInputs.availabilityDateSelect = 'date'
    announcementInputs.availabilityDate = availabilityDate
  }
  return announcementInputs
}

function setBlobs(id, pictures) {
  if (typeof window === 'undefined') return
  
  pictures.map((picture, index) => {
    fetch(`${API_URL}/pictures`, {
      headers: { 'key': `announcements/${id}/${picture.database}`, 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(json => {
      fetch(json.url, {
        headers: {
          'key': `announcements/${id}/${picture.database}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) return response.blob()
      })
      .then(blobResponse => {
        let blobs = [ ...this.props.blobs ]
        blobs[index] = {
          blob: window.URL.createObjectURL(blobResponse),
          database: picture.database,
          description: ''
        }

        this.props.changeInputs({
          blobs
        })
      })
    })
  })
}

function parseFeatures(announcementFeatures) {
  announcementFeatures = announcementFeatures || []
  let initialState = {}
  features.map(feature => {
    let value = false
    if (announcementFeatures.indexOf(feature.ref) != -1) value = true
    initialState[feature.ref] = value
  })
  return initialState
}

function parseFurnishings(announcementFurnishings) {
  announcementFurnishings = announcementFurnishings || []
  let initialState = {}
  furnishings.map(furnishing => {
    let value = false
    if (announcementFurnishings.indexOf(furnishing.ref) != -1) value = true
    initialState[furnishing.ref] = value
  })
  return initialState
}
