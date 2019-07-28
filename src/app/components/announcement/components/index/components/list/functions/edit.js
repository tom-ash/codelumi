

export function edit(announcement) {
  this.changeRoute(null, 'announcementEditing', announcement.id)
}