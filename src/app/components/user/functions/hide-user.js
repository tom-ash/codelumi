export function hideUser() {
  const {
    changeApp,
    changeAnnouncementControl
  } = this.props

  changeApp({
    showUserCreate: false,
    showUserAuthorize: false,
    showUserEditPasswordReset: false,
    showUserEditPhoneVerify: false
  })
  changeAnnouncementControl({ publishing: false })
}
