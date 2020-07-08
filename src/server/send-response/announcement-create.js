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
    }
  },
  title,
  description,
  url
}) {

  const openGraph = openGraphProvider({
    title,
    description,
    image: "https://warsawlease.s3.eu-central-1.amazonaws.com/assets/warsawlease-logo-on-white.png",
    imageWidth: "1200",
    imageHeight: "630"
  })

  fetch(`${API_URL}/posts/announcement_create_editorial`, {
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
        }
      },
      title,
      description,
      url,
      openGraph
    })
  })
}
