const fetch = require("node-fetch")
import { appState } from '../../app/constants/app-state'
import { openGraphProvider } from '../../shared/functions/providers/open-graph-provider'
import { sendResponse } from './send-response'

export function sendAnnouncementCreateResponse({
  res,
  initialState: {
    app: {
      language,
      device
    },
    visitor
  },
  title,
  description,
  url
}) {

  const openGraph = openGraphProvider({
    title,
    description,
    image: "https://warsawlease.s3.eu-central-1.amazonaws.com/assets/warsawlease.pl-darmowe-ogloszenia-nieruchomosci-wynajem-warszawa.png",
    imageWidth: "1200",
    imageHeight: "630"
  })
  
  fetch(`${API_URL}/posts/announcementCreateEditorial`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    sendResponse({
      res,
      initialState: {
        app: {
          ...appState,
          showAnnouncementCreate: true,
          language,
          device
        },
        post: {
          index: {
            data: {
              posts: {
                announcementCreateEditorial: json
              }
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
