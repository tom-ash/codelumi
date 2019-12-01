export function componentDidMount() {
  const { publishing, authorized, phoneVerified } = this.props
  if (!publishing) return
  if (!authorized) return console.log("TODO")
  if (!phoneVerified) return console.log("TODO")
  this.savePicture()
}

export function componentDidUpdate() {
  const { connecting, publishing, authorized, phoneVerified, blobs } = this.props
  if (!publishing) return
  if (!authorized) return console.log("TODO")
  if (!phoneVerified) return console.log("TODO")
  if (!connecting && !this.props.success) {
    if (blobs.length > 0) return this.savePicture()
    this.saveAnnouncement()
  }
}
