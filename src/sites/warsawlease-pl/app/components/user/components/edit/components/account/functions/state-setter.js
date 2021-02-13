import genericRouteStateSetter from '../../../../../../../functions/setters/generic-route-state.js'

function userEditAccountStateSetter(routeData) {
  const { initialState: state } = routeData
  const { changeApp, changeUserEditData: changeData } = this.props

  changeData(state)
  changeApp({ routeDataSet: true })
  genericRouteStateSetter.call(this, routeData)
}
  
export default userEditAccountStateSetter
  