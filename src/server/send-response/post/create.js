const fetch = require("node-fetch")
import { sendResponse } from '../send-response'
import { appState } from '../../../app/constants/app-state'

export function sendPostCreateResponse({
  res,
  device,
  visitorState,
  url
}) {
  const language = url === 'add-post' ? 'en' : 'pl'
  const title = url === 'add-post' ? 'Add Post' : 'Dodaj post'

  sendResponse({ 
    res,
    initialState: {
      app: {
        ...appState,
        language,
        device
      },
      post: {
        render: {
          create: true
        }
      },
      ...visitorState
    },
    title,
    url
  })
}
