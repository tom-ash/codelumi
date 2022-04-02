import getAccessToken from '../../../../../../app/functions/tokens/getters/get-tokens.js'
import { UPDATE_API_ROUTE } from '../constants/api_route_data.js'

export function save({ withRouteChange = false }) {
  const body = JSON.parse(this.props.body)
  const style = JSON.parse(this.props.style)
  const meta = JSON.parse(this.props.meta)
  const { apiUrl, changeControl, headerAutonumbering } = this.props
  const { method, route } = UPDATE_API_ROUTE

  let currentH2 = 0
  let currentH3 = 0
  let currentH4 = 0

  body.map((node, index) => {
    if (node.t === 'rt') {
      body[index] = node.c
    }

    if (node.t === 'p') {
      body[index] = node.c
    }

    if (headerAutonumbering) {
      if (node.t === 'h2') {
        currentH2++
        currentH3 = 0
        currentH4 = 0
        node.n = `${currentH2}.`
      }
  
      if (node.t === 'h3') {
        currentH3++
        currentH4 = 0
        node.n = `${currentH2}.${currentH3}.`
      }
  
      if (node.t === 'h4') {
        currentH4++
        node.n = `${currentH2}.${currentH3}.${currentH4}.`
      }
    } else {
      if (['h2', 'h3', 'h4'].indexOf(node.t) !== -1) {
        delete node.n
      }
    }
  })

  const requestBody = JSON.stringify({ ...this.props, body, style, meta })

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
    if (!withRouteChange) return

    const { buildUrl, changeRoute } = this.props
    const href = buildUrl({ path })

    changeRoute({ href })
  })
  .finally(() => {
    changeControl({ fetching: false })
  })
}
