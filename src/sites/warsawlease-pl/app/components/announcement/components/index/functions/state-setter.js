function announcementIndexStateSetter(routeData) {
  const { initialState: state } = routeData
  const { changeApp, changeAnnouncementIndexData: changeData, changeAnnouncementIndexControl: changeControl } = this.props
  const { amount } = state
  const announcements = state.announcements.map(announcement => {
    announcement.pictureIndex = 0
    announcement.showLoader = true
    return announcement
  })
  if (announcements && announcements[0]) announcements[0].show = true

  changeData({ amount, announcements })
  changeControl({ connecting: false })
  changeApp({ routeDataSet: true })
}

export default announcementIndexStateSetter
