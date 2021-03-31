import createAnnouncement from './create-announcement.js'
import savePicture from './save-picture.js'

export function componentDidMount() {
  const { renderEdit } = this.props

  if (renderEdit) this.getAnnouncement()
}

export function componentDidUpdate(prevProps) {
  const { savingAnnouncement: prevSavingAnnouncement } = prevProps
  const { connecting, savingAnnouncement, step, blobs, changeControl } = this.props

  if (step !== 'publishing') return

  if (!connecting) {
    if (blobs.length > 0) return savePicture.call(this)
    if (!savingAnnouncement) changeControl({ savingAnnouncement: true })
  }

  if (!prevSavingAnnouncement && savingAnnouncement) createAnnouncement.call(this)
}

export function componentWillUnmount() {
  const { resetControl, resetInputs, resetErrors } = this.props

  resetControl()
  resetInputs()
  resetErrors()
}
