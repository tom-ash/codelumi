export function edit(announcement) {
  this.changePath({ showAnnouncementIndexList: false, showAnnouncementEdit: true, announcementId: announcement.id })
}