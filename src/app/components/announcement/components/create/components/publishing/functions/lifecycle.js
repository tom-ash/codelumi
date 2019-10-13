export function componentDidMount() {
  const { publishing, authorized, phoneVerified } = this.props
  if (!publishing) return
  if (!authorized) return this.changeRoute(null, 'signUp')
  if (!phoneVerified) return this.changeRoute(null, 'phoneVerify')
  this.savePicture()
}

export function componentDidUpdate() {
  const { connecting, publishing, authorized, phoneVerified, blobs } = this.props
  if (!publishing) return
  if (!authorized) return this.changeRoute(null, 'signUp')
  if (!phoneVerified) return this.changeRoute(null, 'phoneVerify')
  if (!connecting && !this.props.success) {
    if (blobs.length > 0) return this.savePicture()
    this.saveAnnouncement()
  }
}
