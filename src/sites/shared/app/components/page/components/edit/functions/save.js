import getAccessToken from '../../../../../../app/functions/tokens/getters/get-tokens.js'
import { UPDATE_API_ROUTE } from '../constants/api_route_data.js'

export function save({ withRouteChange = false }) {
  const { apiUrl, changeControl, changeData, headerAutonumbering, autoSchema, manualSchema } = this.props
  const body = JSON.parse(this.props.body)
  const style = JSON.parse(this.props.style)
  const meta = JSON.parse(this.props.meta)
  const { method, route } = UPDATE_API_ROUTE

  try {
    const linkData = JSON.parse(this.props.linkData)
    linkData.modifiedOn = this.props.modifiedOn
  } catch {
    return changeData({ updated: false })
  }

  let currentH2 = 0
  let currentH3 = 0
  let currentH4 = 0

  body.map(node => {
    // FIXME: Temporary hack.
    const articleNodes = typeof node === 'object' && Array.isArray(node.article) ? node.article : null
    const mainNode = articleNodes.find(obj => obj.main)
    mainNode && mainNode.main.map(articleNode => {
      if (headerAutonumbering) {

        if (articleNode.h2) {
          currentH2++
          currentH3 = 0
          currentH4 = 0
  
          if (typeof articleNode.h2 === 'object') {
            articleNode.h2.n = `${currentH2}.`
          } else {
            articleNode.h2 = { c: articleNode.h2, n: `${currentH2}.` }
          }
        }
    
        if (articleNode.h3) {
          currentH3++
          currentH4 = 0
  
          if (typeof articleNode.h3 === 'object') {
            articleNode.h3.n = `${currentH2}.${currentH3}.`
          } else {
            articleNode.h3 = { c: articleNode.h3, n: `${currentH2}.${currentH3}.` }
          }
        }
    
        if (articleNode.h4) {
          currentH4++
  
          if (typeof articleNode.h4 === 'object') {
            articleNode.h4.n = `${currentH2}.${currentH3}.${currentH4}.`
          } else {
            articleNode.h4 = { c: articleNode.h4, n: `${currentH2}.${currentH3}.${currentH4}.` }
          }
        }
      } else {
        if (articleNode.h2 && typeof articleNode.h2 === 'object') {
          articleNode.h2 = articleNode.h2.c
        }
  
        if (articleNode.h3 && typeof articleNode.h3 === 'object') {
          articleNode.h3 = articleNode.h3.c
        }
  
        if (articleNode.h4 && typeof articleNode.h4 === 'object') {
          articleNode.h4 = articleNode.h4.c
        }
      }
    })
  })

  const requestBody = JSON.stringify(
    {
      ...this.props,
      body,
      style,
      meta,
      autoSchema,
      manualSchema,
      linkData: JSON.stringify(linkData)
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
