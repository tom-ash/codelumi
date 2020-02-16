export function edit(announcement) {
  this.changeRoute({ showAnnouncementIndexAdded: false, showAnnouncementEdit: true, announcementId: announcement.id })
}