import API_URL from '../../../../../../shared/constants/urls/api'
import { features } from '../../../constants/features'
import { furnishings } from '../../../constants/furnishings'

function prepareAnnouncement() {
  const { announcement, changeInputs } = this.props
  const { id, pictures, features, furnishings, availabilityDate, polishDescription, englishDescription } = announcement

  const inputs = {
    ...announcement,
    features: parseFeatures(features),
    furnishings: parseFurnishings(furnishings),
    ...(availabilityDate && { addAvailabilityDate: true }),
    ...(features && features.length && { addFeatures: true }),
    ...(furnishings && furnishings.length && { addFurnishings: true }),
    ...(polishDescription && { showPolish: true }),
    ...(englishDescription && { showEnglish: true }),
  }

  changeInputs(inputs)
  setBlobs.call(this, id, pictures)
}

function setBlobs(id, pictures) {
  if (typeof window === 'undefined') return

  pictures.map((picture, index) => {
    const key = `announcements/${id}/${picture.database}`

    fetch(`${API_URL}/remote-asset/presigned-get?key=${key}`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(json => {
        fetch(json.url, {
          headers: { 'Content-Type': 'application/json' },
        })
          .then(response => {
            if (response.ok) return response.blob()
          })
          .then(blobResponse => {
            const { changeInputs } = this.props
            const blobs = [...this.props.blobs]
            blobs[index] = {
              blob: window.URL.createObjectURL(blobResponse),
              database: picture.database,
              description: '',
            }

            changeInputs({ blobs })
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

export default prepareAnnouncement
