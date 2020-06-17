export function componentDidMount() {
  const { changeControl, showEdit } = this.props

  if (showEdit) {
    this.getAnnouncement()
    changeControl({ editing: true })
  }
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
  const { resetControl, resetInputs, resetErrors } = this.props

  const { publishing, success } = this.props
  if (publishing && !success) return
  resetControl()
  resetInputs()
  resetErrors()
}
