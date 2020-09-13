const fetch = require("node-fetch")
import { sendResponse } from './send-response'
import { appState } from '../../app/constants/app-state'
import { data } from '../../app/components/announcement/components/index/constants/state'
import { openGraphProvider } from '../../shared/functions/providers/open-graph-provider'

export function sendAnnouncementsListResponse({
  res,
  initialState: {
    app: { language, device },
    visitor
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

    const openGraph = openGraphProvider({
      title,
      description,
      image: "https://warsawlease.s3.eu-central-1.amazonaws.com/assets/warsawlease.pl-darmowe-ogloszenia-nieruchomosci-wynajem-warszawa.png",
      imageWidth: "1200",
      imageHeight: "630"
    })

    sendResponse({
      res,
      initialState: {
        app: {
          ...appState,
          showAnnouncementIndexMap: true,
          showAnnouncementIndexCatalogue: true,
          language,
          device
        },
        announcement: {
          index: {
            data: {
              ...data,
              announcements,
              amount
            }
          }
        },
        visitor
      },
      title,
      description,
      url,
      openGraph
    })
  })
}
