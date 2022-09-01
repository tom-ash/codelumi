import getAccessToken from '../../../../../../app/functions/tokens/getters/get-tokens.js'
import { UPDATE_API_ROUTE } from '../constants/api_route_data.js'

export function save({ withRouteChange = false }) {
  const { apiUrl, changeControl, changeData, headerAutonumbering, autoSchema, manualSchema } = this.props
  const body = JSON.parse(this.props.body)
  const { method, route } = UPDATE_API_ROUTE

  let currentH2 = 0
  let currentH3 = 0
  let currentH4 = 0

  try {
    body[0]['main'][0]['article'].map(node => {
      if (headerAutonumbering) {
        if (node.h2) {
          currentH2++
          currentH3 = 0
          currentH4 = 0

          if (typeof node.h2 === 'object') {
            node.h2.n = `${currentH2}.`
          } else {
            node.h2 = { c: node.h2, n: `${currentH2}.` }
          }
        }
    
        if (node.h3) {
          currentH3++
          currentH4 = 0

          if (typeof node.h3 === 'object') {
            node.h3.n = `${currentH2}.${currentH3}.`
          } else {
            node.h3 = { c: node.h3, n: `${currentH2}.${currentH3}.` }
          }
        }
    
        if (node.h4) {
          currentH4++

          if (typeof node.h4 === 'object') {
            node.h4.n = `${currentH2}.${currentH3}.${currentH4}.`
          } else {
            node.h4 = { c: node.h4, n: `${currentH2}.${currentH3}.${currentH4}.` }
          }
        }
      } else {
        if (node.h2 && typeof node.h2 === 'object') {
          node.h2 = node.h2.c
        }

        if (node.h3 && typeof node.h3 === 'object') {
          node.h3 = node.h3.c
        }

        if (node.h4 && typeof node.h4 === 'object') {
          node.h4 = node.h4.c
        }
      }
    })
  } catch {
    console.warn('Autonumbering needs article nested in main!')
  }

  const requestBody = JSON.stringify(
    {
      ...this.props,
      body,
      autoSchema,
      manualSchema
    }
  )

  changeControl({ fetching: true })
  fetch(`${apiUrl}/${route}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken()
    },
    body: requestBody
  })
  .then(response => {
    if (response.status === 200) return response.json()

    throw new Error('Server error at updating page!')
  })
  .then(path => {
    changeData({ updated: true })

    if (!withRouteChange) return

    const { buildUrl, changeRoute } = this.props
    const href = buildUrl({ path })

    changeRoute({ href })    
  })
  .catch(error => {
    changeData({ updated: false })
    console.error(error)
  })
  .finally(() => {
    changeControl({ fetching: false })
  })
}
