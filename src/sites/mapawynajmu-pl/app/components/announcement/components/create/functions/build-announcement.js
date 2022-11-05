import { createClientServerParams } from '../../../constants/client-server-params'

function buildAnouncement() {
  const serverParams = {}
  if (this.props.id) serverParams.id = this.props.id
  createClientServerParams.map(param => (serverParams[param.server] = this.props[param.client]))
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
    if (this.props[type][key] === true) elements.push(key)
  }
  return elements
}

export default buildAnouncement
