import createAnnouncement from './create-announcement'
// import savePicture from './save-picture'
// import { setBlobs } from './set-blobs'

export function componentDidMount() {
  const { id, renderEdit } = this.props


  // TODO
  // if (renderEdit) {
  //   setBlobs.call(this, id, dbPictures)
  // }
}

export function componentDidUpdate(prevProps) {
  const { step: prevStep } = prevProps
  const { step } = this.props

  if (prevStep !== 'publishing' && step === 'publishing' ) {
    createAnnouncement.call(this)
  }
}
