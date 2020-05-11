const fetch = require("node-fetch")
import { sendResponse } from './send-response'
import { appState } from '../../app/constants/app-state'
import { data } from '../../app/components/announcement/components/index/constants/state'

export function sendAnnouncementsListResponse({
  res,
  initialState: {
    app: { language }
  },
  title,
  description,
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
        app: {
          ...appState,
          showAnnouncementIndexMap: true,
          showAnnouncementIndexList: true,
          language
        },
        announcement: {
          index: {
            data: {
              ...data,
              announcements,
              amount
            }
          }
        }
      },
      title,
      description,
      url
    })
  })
}
