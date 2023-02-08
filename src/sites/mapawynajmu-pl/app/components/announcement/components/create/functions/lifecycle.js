import createAnnouncement from './create-announcement'
import savePicture from './save-picture'

export function componentDidMount() {

  // TODO: Set blobs.
}

export function componentDidUpdate(prevProps) {
  const { savingAnnouncement: prevSavingAnnouncement } = prevProps
  const { connecting, savingAnnouncement, step, blobs, setControl } = this.props

  if (step !== 'publishing') return

  if (!connecting) {
    if (blobs.length > 0) return savePicture.call(this)
    if (!savingAnnouncement) setControl({ savingAnnouncement: true })
  }

  if (!prevSavingAnnouncement && savingAnnouncement) createAnnouncement.call(this)
}
