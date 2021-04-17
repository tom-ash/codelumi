import AWS_S3_URL from '../../../../../../shared/constants/urls/aws-s3.js'
import { features } from '../../../constants/features'
import { furnishings } from '../../../constants/furnishings'

function prepareAnnouncement() {
  const { announcement, changeInputs } = this.props
  const { id, pictures, features, furnishings, availabilityDate, polishDescription, englishDescription } = announcement

  const inputs = {
    ...announcement,
    features: parseFeatures(features),
    furnishings: parseFurnishings(furnishings),
    ...availabilityDate && { addAvailabilityDate: true },
    ...features && features.length && { addFeatures: true },
    ...furnishings && furnishings.length && { addFurnishings: true },
    ...polishDescription && { addPolishDescription: true },
    ...englishDescription && { addEnglishDescription: true },
  }

  changeInputs(inputs)
  setBlobs.call(this, id, pictures)
}

function setBlobs(id, pictures) {
  if (typeof window === 'undefined') return
  
  pictures.map((picture, index) => {
    fetch(`${AWS_S3_URL}/announcements/${id}/${picture.database}`, {})
    .then(response => {
      if (response.ok) return response.blob()
    })
    .then(blobResponse => {
      const { changeInputs } = this.props
      const blobs = [ ...this.props.blobs ]

      blobs[index] = {
        blob: window.URL.createObjectURL(blobResponse),
        database: picture.database,
        description: ''
      }

      changeInputs({ blobs })
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

// [{"database": "20210413190654031yimYQPHunf7x80kCYbw78w.jpeg", "description": ""}, {"database": "20210413190654786-xa9eB2XDQY0K93ut88Fjg.jpeg", "description": ""}, {"database": "202104131906551957mXGpsWspag-JobXpAMGlw.jpeg", "description": ""}, {"database": "20210413190655699JEevw9pLull4V-tRZZgfpw.jpeg", "description": ""}, {"database": "20210413190656064uIwPJbleZ11GR17MAu74ig.jpeg", "description": ""}, {"database": "20210413190656901ZVjE-PGQtLF6OAsL0BkpaA.jpeg", "description": ""}]