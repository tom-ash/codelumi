import { showClientServerParams } from '../../../../constants/client-server-params.js'

function announcementShowRouteDataSetter(routeData) {
  const { changeAnnouncementShowData: changeData } = this.props
  const { initialState: { announcement } } = routeData
  const clientParams = {}
  showClientServerParams.map(param => ( clientParams[param.client] = announcement[param.server] ))

  changeData(clientParams)
}

export default announcementShowRouteDataSetter
