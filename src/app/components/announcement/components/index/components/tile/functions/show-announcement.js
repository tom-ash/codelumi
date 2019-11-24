export function showAnnouncement() {
  this.changeRoute(null, 'showAnnouncement', this.props.announcement.id)
}