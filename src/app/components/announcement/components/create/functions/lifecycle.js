export function componentDidMount() {
  const {
    changeControl,
    changePageShowData,
    changePostRender
  } = this.props

  if (RENDER_EDIT) {
    this.getAnnouncement()
    changeControl({ editing: true })
  }

  CHANGE_RENDERS
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
    resetErrors,
    resetUserCreateControl,
    resetUserCreateInputs,
    resetUserCreateData,
    resetUserCreateErrors,
    changePageShowData,
    changePostRender
  } = this.props

  CHANGE_RENDER
  changePageShowData({ name: null, body: null })
  resetControl()
  resetInputs()
  resetErrors()
  resetUserCreateControl()
  resetUserCreateInputs()
  resetUserCreateData()
  resetUserCreateErrors()
}
