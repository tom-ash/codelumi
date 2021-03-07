import API_URL from '../../../../../../shared/constants/urls/api.js'
import { createClientServerParams } from '../../../constants/client-server-params'
import { getAccessToken } from '../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function saveAnnouncement() {
  const {
    renderEdit,
    changeControl,
    changeData,
    connecting
  } = this.props

  let destination = '/announcements'
  let method = 'POST'
  if (connecting) return

  changeControl({ connecting: true })

  if (renderEdit) {
    destination = `/announcements/${this.props.id}`
    method = 'PUT'
  }

  const access_token = getAccessToken()
  fetch(API_URL + destination, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      access_token
    },
    body: JSON.stringify(buildAnouncementParams.apply(this))
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(({ id }) => {
    if (id) changeData({ id })
    changeControl({
      connecting: false,
      step: 'success'
    })
  })
}

function buildAnouncementParams() {
  const serverParams = {}
  if (this.props.id) serverParams.id = this.props.id
  createClientServerParams.map(param => serverParams[param.server] = this.props[param.client])
  serverParams.availabilityDate = this.props.availabilityDate
  serverParams.features = buildElements.call(this, 'features')
  serverParams.furnishings = buildElements.call(this, 'furnishings')
  serverParams.latitude = this.props.latitude
  serverParams.longitude = this.props.longitude
  return serverParams
}

function buildElements(type) {
  const elements = []
  for (let key in this.props[type]) {
    if ((this.props[type])[key] === true) elements.push(key)
  }
  return elements
}