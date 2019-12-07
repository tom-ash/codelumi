export function edit(announcement) {
  this.changeRoute({ showAnnouncementIndexUser: false, showAnnouncementEdit: true, announcementId: announcement.id })
}