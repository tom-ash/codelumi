import { apiUrl } from '../../../../../constants/urls'
import { features } from '../../../constants/features'
import { furnishings } from '../../../constants/furnishings'
import { getUserToken } from '../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function getAnnouncement() {
  const path = window.location.pathname
  let announcementId = path.match(/\d+/)
  if (!announcementId) return
  const UT = getUserToken()
  fetch(`${apiUrl}/announcements/${announcementId[0]}/edit`, {
    headers: {
      'Content-Type': 'application/json',
      UT
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    }
  })
  .then(jsonResponse => {
    const announcement = jsonResponse.announcement
    setBlobs.call(this, announcement.id, announcement.pictures)

    let announcementInputs = {
      id: +announcement.id,
      category: +announcement.category,
      district: +announcement.district,
      rentCurrency: +announcement.rent_currency,
      netRentAmount: announcement.net_rent_amount,
      additionalFees: announcement.additional_fees,
      area: announcement.area,
      rooms: +announcement.rooms,
      floor: +announcement.floor,
      totalFloors: +announcement.total_floors,
      features: parseFeatures(announcement.features),
      furnishings: parseFurnishings(announcement.furnishings),
      descriptionPolish: announcement.polish_description || '',
      descriptionEnglish: announcement.english_description || '',
      mapLatitude: announcement.latitude / 1000000,
      mapLongitude: announcement.longitude / 1000000
    }
    this.props.changeInputs(appendAvailabilityDate(announcement, announcementInputs))
  })
}

function appendAvailabilityDate(announcement, announcementInputs) {
  if (announcement.availability_date == 'now') {
    announcementInputs.availabilityDateSelect = 'now'
  } else {
    announcementInputs.availabilityDateSelect = 'date'
    announcementInputs.availabilityDate = announcement.availability_date
  }
  return announcementInputs
}

function setBlobs(id, pictures) {
  pictures.map((picture, index) => {
    fetch(`${apiUrl}/pictures`, {
      headers: { 'key': `announcements/${id}/${picture.database}`, 'Content-Type': 'application/json' }
    })
    .then(response => { if (response.ok) return response.json() })
    .then(jsonResponse => {
      fetch(jsonResponse.url, {
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