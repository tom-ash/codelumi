const fetch = require("node-fetch")
import { sendResponse } from '../send-response'
import { appState } from '../../../app/constants/app-state'

export function sendPostShowResponse({
  res,
  device,
  visitorState,
  url
}) {
  fetch(`${API_URL}/posts/urls/${url}`, {
    headers: {
    'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(json => {
    const language = json.language
    const page = json[language]
    const {
      title,
      description,
    } = page

    sendResponse({
      res,
      url,
      title,
      description,
      initialState: {
        app: {
          ...appState,
          language,
          device
        },
        ...visitorState,
        post: {
          show: {
            data: {
              name: json.name,
              pl: json.pl,
              en: json.en
            }
          },
          render: {
            show: true
          }
        }
      }
    })
  })
  .catch(error => {
    sendResponse({
      res,
      status: 404,
      url,
      title: 'Not Found',
      description: 'Not Found',
      initialState: {
        app: {
          ...appState,
          language: 'pl',
          showNotFound: true,
          device
        },
        ...visitorState
      }
    })
  })
}
