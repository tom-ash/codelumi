export function componentDidMount() {
  const { renderEdit } = this.props

  if (renderEdit) this.getAnnouncement()
}

export function componentDidUpdate() {
  const {
    connecting,
    step,
    blobs
  } = this.props

  if (step !== 'publishing') return
  if (!connecting) {
    if (blobs.length > 0) return this.savePicture()
    this.saveAnnouncement()
  }
}

export function componentWillUnmount() {
  const {
    resetControl,
    resetInputs,
    resetErrors
  } = this.props

  resetControl()
  resetInputs()
  resetErrors()
}
