import { data } from '../../../../../../app/components/announcement/components/index/constants/state'

export function announcementIndexInitialStateParser({ announcements, amount }) {
  const parsedAnnouncements = announcements.map(announcement => {
    announcement.pictureIndex = 0
    announcement.showLoader = true
    return announcement
  })
  if (parsedAnnouncements && parsedAnnouncements[0]) parsedAnnouncements[0].show = true

  return {
    announcement: {
      index: {
        data: {
          ...data,
          announcements: parsedAnnouncements,
          amount
        }
      }
    }
  }
}
