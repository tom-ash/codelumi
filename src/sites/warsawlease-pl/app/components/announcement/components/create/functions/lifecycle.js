import createAnnouncement from './create-announcement.js'
import savePicture from './save-picture.js'
import prepareAnnouncement from './prepare-announcement.js'

export function componentDidMount() {
  const { announcement, renderEdit } = this.props

  if (renderEdit) announcement && prepareAnnouncement.call(this)
}

export function componentDidUpdate(prevProps) {
  const { savingAnnouncement: prevSavingAnnouncement, announcement: prevAnnouncement } = prevProps
  const { connecting, savingAnnouncement, step, blobs, announcement, changeControl } = this.props

  if (!prevAnnouncement && announcement) return prepareAnnouncement.call(this)

  if (step !== 'publishing') return

  if (!connecting) {
    if (blobs.length > 0) return savePicture.call(this)
    if (!savingAnnouncement) changeControl({ savingAnnouncement: true })
  }

  if (!prevSavingAnnouncement && savingAnnouncement) createAnnouncement.call(this)
}

export function componentWillUnmount() {
  const { resetData, resetControl, resetInputs, resetErrors } = this.props

  resetData()
  resetErrors()
  resetInputs()
  resetControl()
}
