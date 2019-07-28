export function getAnnouncementPath() {
  return window.location.pathname.substring(1)
}
  
export function validId(id) {
  return /^\d+$/.test(id)
}

export function showAnnouncement() {
  return validId(getAnnouncementPath())
}