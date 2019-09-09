export function componentDidUpdate() {
  const { publishingAnnouncement, authorized } = this.props
  if (!authorized) return
  if (publishingAnnouncement) return this.changeRoute(null, 'addAnnouncement')
  this.changeRoute(null, 'myAccount')
}

export function componentWillUnmount() {
  this.props.resetControl()
  this.props.resetInputs()
  this.props.resetData()
  this.props.resetErrors()
}