export function componentDidMount() {
  const { changeControl, showEdit } = this.props

  if (showEdit) {
    this.getAnnouncement()
    changeControl({ editing: true })
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
