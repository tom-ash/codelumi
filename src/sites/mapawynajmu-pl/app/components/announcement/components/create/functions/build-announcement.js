import { createClientServerParams } from '../../../constants/client-server-params'

function buildAnouncement() {
  const serverParams = {}
  if (this.props.id) serverParams.id = this.props.id
  createClientServerParams.map(param => (serverParams[param.server] = this.props[param.client]))
  serverParams.availabilityDate = this.props.availabilityDate
  serverParams.features = this.props.features
  serverParams.furnishings = this.props.furnishings
  serverParams.latitude = this.props.latitude
  serverParams.longitude = this.props.longitude
  serverParams.addPromotion = this.props.addPromotion
  return serverParams
}

export default buildAnouncement
