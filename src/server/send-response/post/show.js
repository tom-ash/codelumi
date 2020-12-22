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

    sendResponse({
      res,
      initialState: {
        app: {
          ...appState,
          language,
          device
        },
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
        },
        ...visitorState
      },
      title: json[language].title,
      description: json[language].meta && json[language].meta.description,
      url
    })
  })
  .catch(error => {
    sendResponse({
      res,
      initialState: {
        app: {
          ...appState,
          showNotFound: true,
          language: 'pl',
          device
        },
        ...visitorState
      },
      title: '404',
      description: error,
      url,
      noIndex: true,
      status: 404
    })
  })
}
