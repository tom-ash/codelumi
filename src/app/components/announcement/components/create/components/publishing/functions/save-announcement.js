import { apiUrl } from '../../../../../../../constants/urls'
import { handleAvailabilityDate } from './handle-availability-date'
import { createClientServerParams } from '../../../../../constants/client-server-params'
import { getUserToken } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function saveAnnouncement() {
  let destination = '/announcements'
  let method = 'POST'
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  if (this.props.editing) {
    destination = `/announcements/${this.props.id}`
    method = 'PUT'
  }
  const UT = getUserToken()
  fetch(apiUrl + destination, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      UT
    },
    body: JSON.stringify(buildAnouncementParams.apply(this))
  })
  .then(response => {
    if (response.ok) this.props.changeControl({
      connecting: false,
      success: true
    })
  })
}

function buildAnouncementParams() {
  const serverParams = {}
  if (this.props.id) serverParams.id = this.props.id
  createClientServerParams.map(param => serverParams[param.server] = this.props[param.client])
  serverParams.availability_date = handleAvailabilityDate.call(this)
  serverParams.features = buildElements.call(this, 'features')
  serverParams.furnishings = buildElements.call(this, 'furnishings')
  serverParams.latitude = Math.round(this.props.mapLatitude * 1000000)
  serverParams.longitude = Math.round(this.props.mapLongitude * 1000000)
  return serverParams
}

function buildElements(type) {
  const elements = []
  for (let key in this.props[type]) {
    if ((this.props[type])[key] === true) elements.push(key)
  }
  return elements
}