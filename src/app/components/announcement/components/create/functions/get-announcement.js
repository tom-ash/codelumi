import { apiUrl } from '../../../../../constants/urls'
import { features } from '../../../constants/features'
import { furnishings } from '../../../constants/furnishings'
import { getAccessToken } from '../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function getAnnouncement() {
  const { announcementId } = this.props

  if (!announcementId) return
  const access_token = getAccessToken()
  fetch(`${apiUrl}/announcements/${announcementId}/edit`, {
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
    const { changeInputs } = this.props
    const {
      id, category, district, rentCurrency, netRentAmount, area, rooms, floor, totalFloors, pictures,
      features, furnishings, polishDescription, englishDescription, latitude, longitude, availabilityDate
    } = json

    setBlobs.call(this, id, pictures)

    let announcementInputs = {
      id, category, district, rentCurrency, netRentAmount, area, rooms, floor, totalFloors,
      features: parseFeatures(features), furnishings: parseFurnishings(furnishings),
      descriptionPolish: polishDescription || '', descriptionEnglish: englishDescription || '',
      mapLatitude: latitude / 1000000, mapLongitude: longitude / 1000000
    }
    changeInputs(appendAvailabilityDate(availabilityDate, announcementInputs))
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
    fetch(`${apiUrl}/pictures`, {
      headers: { 'key': `announcements/${id}/${picture.database}`, 'Content-Type': 'application/json' }
    })
    .then(response => { if (response.ok) return response.json() })
    .then(json => {
      fetch(json.url, {
        headers: { 'key': `announcements/${id}/${picture.database}`, 'Content-Type': 'application/json' }
      })
      .then(response => { if (response.ok) return response.blob() })
      .then(blobResponse => {

        let pictureBlobs = [ ...this.props.pictureBlobs ]
        pictureBlobs[index] = {
          blob: window.URL.createObjectURL(blobResponse),
          database: picture.database,
          description: ''
        }

        this.props.changeInputs({
          pictureBlobs
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