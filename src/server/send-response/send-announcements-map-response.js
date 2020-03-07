const fetch = require("node-fetch")
import { sendResponse } from './send-response'

export function sendAnnouncementsMapResponse({
  res,
  initialState: { route: { language } },
  title,
  url
}) {
  fetch(API_URL + `/announcements`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const { amount } = json
    const announcements = json.announcements.map(announcement => {
      announcement.pictureIndex = 0
      announcement.showLoader = true
      return announcement
    })
    if (announcements && announcements[0]) announcements[0].show = true

    sendResponse({
      res,
      initialState: {
        route: {
          showAnnouncementIndexMap: true,
          language
        },
        announcementsList: {
          announcements,
          amount
        }
      },
      title,
      url
    })
  })
}
