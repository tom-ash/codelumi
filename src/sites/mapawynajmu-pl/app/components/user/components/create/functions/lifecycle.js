export function componentWillUnmount() {
  const { venue } = this.props

  if (venue !== 'announcementCreate') {
    this.props.resetControl()
    this.props.resetInputs()
    this.props.resetData()
    this.props.resetErrors()
  }
}
