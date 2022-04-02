// import getAccessToken from '../../../../../../app/functions/tokens/getters/get-tokens.js'
// import { UPDATE_API_ROUTE } from '../constants/api_route_data.js'

interface saveProps {
  apiUrl: string,
  withRouteChange: boolean,
  imageId: number,
  body: string
}

export function save(props: saveProps) {

  const {
    apiUrl,
    withRouteChange = false,
    imageId,
    body
  } = props

  const parsedBody = JSON.parse(body)

  fetch(`${apiUrl}/image/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Token': getAccessToken()
    },
    body: JSON.stringify({
      imageId,
      body: parsedBody
    })
  })
  // TODO:
  // .then(response => {
  //   if (response.status === 200) return response.json()

  //   throw new Error('Server error at updating page!')
  // })
  // .then(path => {
  //   if (!withRouteChange) return

  //   const { buildUrl, changeRoute } = this.props
  //   const href = buildUrl({ path })

  //   changeRoute({ href })
  // })
  // .finally(() => {
  //   changeControl({ fetching: false })
  // })
}

export default save
