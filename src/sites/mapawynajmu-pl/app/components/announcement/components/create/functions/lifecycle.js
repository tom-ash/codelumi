import createAnnouncement from './create-announcement'
import savePicture from './save-picture'
import { setBlobs } from './set-blobs'

export function componentDidMount() {
  const { id, dbPictures, renderEdit } = this.props

  if (renderEdit) {
    setBlobs.call(this, id, dbPictures)
  }
}

export function componentDidUpdate(prevProps) {
  const { savingListing: prevSavingListing } = prevProps
  const { savingPicture, savingListing, step, blobs, setControl } = this.props

  if (step !== 'publishing') return

  if (!savingPicture) {
    if (blobs.length > 0) return savePicture.call(this)
    if (!savingListing) setControl({ savingListing: true })
  }

  if (!prevSavingListing && savingListing) createAnnouncement.call(this)
}
