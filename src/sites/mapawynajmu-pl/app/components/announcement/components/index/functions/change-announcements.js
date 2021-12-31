export function changeAnnouncements(state, announcement) {
  const announcements = state.announcements.map((stateAnnouncement) => {
    if (stateAnnouncement.id === announcement.id) return announcement
    return stateAnnouncement
  })
  return { ...state, announcements: announcements }
}

export function changeAnnouncement(state, announcement) {
  return { ...state, tile: announcement }
}