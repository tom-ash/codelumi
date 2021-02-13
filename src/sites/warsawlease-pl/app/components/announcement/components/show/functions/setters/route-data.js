import { showClientServerParams } from '../../../../constants/client-server-params.js'
import genericRouteStateSetter from '../../../../../../functions/setters/generic-route-state.js'

function announcementShowRouteDataSetter(routeData) {
  const { changeAnnouncementShowData: changeData } = this.props
  const { initialState: { announcement } } = routeData
  const clientParams = {}
  showClientServerParams.map(param => ( clientParams[param.client] = announcement[param.server] ))

  changeData(clientParams)
  genericRouteStateSetter.call(this, routeData)
}

export default announcementShowRouteDataSetter
