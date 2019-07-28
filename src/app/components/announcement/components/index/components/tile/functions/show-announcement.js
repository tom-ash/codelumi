export function showAnnouncement() {
  this.changeRoute(null, 'announcementShow', this.props.announcement.id)
}