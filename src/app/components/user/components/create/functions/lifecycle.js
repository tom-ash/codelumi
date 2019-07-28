export function componentDidUpdate() {
  this.props.name !== null && this.props.name !== null && this.changeRoute(null, '/myaccount')
  if (this.props.announcementPublishing && this.props.authorized) this.changeRoute(null, 'addAnnouncement')
}

export function componentWillUnmount() {
  this.props.resetControl()
  this.props.resetInputs()
  this.props.resetData()
  this.props.resetErrors()
}