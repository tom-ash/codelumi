export function edit(announcement) {
  this.changePath({ showAnnouncementIndexAdded: false, showAnnouncementEdit: true, announcementId: announcement.id })
}