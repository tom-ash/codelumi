const fetch = require("node-fetch")
import { sendResponse } from './send-response'

export function sendAnnouncementsListResponse(res, language) {
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

    sendResponse(res, {
      routeState: {
        route: {
          showAnnouncementIndexMap: true,
          showAnnouncementIndexList: true,
          language
        },
        announcementsList: {
          announcements,
          amount
        }
      },
      title: `${language === 'pl' ? 'Lista Ogłoszeń Wynajmu Nieruchomości w Warszawie' : 'List of Real Estate Lease Announcements in Warsaw'} | warsawlease.pl`
    })
  })
}
