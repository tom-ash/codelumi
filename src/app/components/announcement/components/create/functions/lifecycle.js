export function componentDidMount() {
  const {
    changeControl,
    showEdit,
    changePostShowData,
    changePostRender
  } = this.props

  if (showEdit) {
    this.getAnnouncement()
    changeControl({ editing: true })
  }

  changePostShowData({ name: 'create_announcement' })
  changePostRender({ show: true })
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
    changePostShowData,
    changePostRender
  } = this.props

  changePostRender({ show: false })
  changePostShowData({ name: null, body: null })
  resetControl()
  resetInputs()
  resetErrors()
  resetUserCreateControl()
  resetUserCreateInputs()
  resetUserCreateData()
  resetUserCreateErrors()
}
