import { getAccessToken } from "../../../../user/components/auth/functions/get-access-token"
import { UPDATE_API_ROUTE } from '../constants/api_route_data'

export function save({ withRouteChange = false }) {
  const { apiUrl, setControl, setData, autoSchema, manualSchema } = this.props
  const body = JSON.parse(this.props.body)
  const { method, route } = UPDATE_API_ROUTE

  const requestBody = JSON.stringify({
    ...this.props,
    body,
    autoSchema,
    manualSchema,
  })

  setControl({ fetching: true })
  fetch(`${apiUrl}/${route}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
    },
    body: requestBody,
  })
    .then(response => {
      if (response.status === 200) return response.json()

      throw new Error('Server error at updating page!')
    })
    .then(path => {
      setData({ updated: true })

      if (!withRouteChange) return

      const { buildUrl, changeRoute } = this.props
      const href = buildUrl({ path })

      changeRoute({ href })
    })
    .catch(error => {
      setData({ updated: false })
      console.error(error)
    })
    .finally(() => {
      setControl({ fetching: false })
    })
}
