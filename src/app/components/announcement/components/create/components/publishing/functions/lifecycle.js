import { compareParameters } from '../../../../../../../functions/compare-update-parameters'

export function componentDidMount() {
  if (!this.props.publishing) return
  if (!this.props.authorized) return this.changeRoute(null, 'signUp')
  if (!this.props.phoneVerified) return this.changeRoute(null, 'phoneVerify')
  if (this.props.authorized) this.props.changeControl({ userCreating: false })
  if (this.props.phoneVerified) this.props.changeControl({ phoneVerifying: false })
  if (this.props.publishing) this.savePicture()
}

export function shouldComponentUpdate(nextProps) {
  return compareParameters(this.props, nextProps, ['userCreating', 'blobs', 'publishing', 'connecting', 'success', 'phoneVerified'])
}

export function componentDidUpdate() {
  if (this.props.publishing && !this.props.authorized) return this.changeRoute(null, 'signUp')
  if (this.props.publishing && !this.props.phoneVerified) return this.changeRoute(null, 'phoneVerify')
  if (this.props.publishing && !this.props.connecting && !this.props.success) {
    if (this.props.blobs.length > 0) return this.savePicture()
    this.saveAnnouncement()
  }
}
