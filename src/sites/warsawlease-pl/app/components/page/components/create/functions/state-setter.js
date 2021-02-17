import genericRouteStateSetter from '../../../../../functions/setters/generic-route-state.js'

function pageCreateStateSetter(routeData) {
  const { initialState: { pageCreate: value } } = routeData
  const { dispatch } = this.props
  const type = 'page/create/inputs'
  const body = JSON.stringify(value.body, null, 2)

  // console.log(body)

  dispatch({ type, value: { ...value, body }})
  
  genericRouteStateSetter.call(this, routeData)
}

export default pageCreateStateSetter
