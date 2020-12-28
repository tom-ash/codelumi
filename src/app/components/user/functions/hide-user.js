export function hideUser() {
  const {
    changeApp,
    changeAnnouncementControl
  } = this.props

  changeApp({
    TODO
  })

  changeAnnouncementControl({ publishing: false })
}
