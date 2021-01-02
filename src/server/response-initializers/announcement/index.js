const fetch = require("node-fetch")
import { appState } from '../../../app/constants/app-state'
import { data } from '../../../app/components/announcement/components/index/constants/state'
import { parseScalableVectorGraphics } from '../../../shared/functions/parsers/parse-scalable-vector-graphics'
import routeRenders from '../../../shared/constants/routes/renders'

export function announcementIndexResponseInitializer({
  route,
  device
}) {
  const {
    lang: language,
    track,
    title,
    description,
    keywords,
    // image,
    // openGraph,
    // schemaOrg,
  } = route

  return (
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

      return {
        title,
        description,
        keywords,
        initialState: {
          app: {
            ...appState,
            language,
            device,
            scalableVectorGraphics: parseScalableVectorGraphics(json.scalableVectorGraphics)
          },
          render: {
            [track]: true,
            ...routeRenders[track]
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
        }
      }
    })
  )
}
