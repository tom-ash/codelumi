import genericRouteStateSetter from '../../../../../functions/setters/generic-route-state.js'

function pageCreateStateSetter(routeData) {
  const { initialState: { pageCreate: value } } = routeData
  const { dispatch } = this.props
  const type = 'page/create/inputs'
  const body = JSON.stringify(value.body, null, 2)
  const meta = JSON.stringify(value.meta, null, 2)

  dispatch({ type, value: { ...value, body, meta }})
  
  genericRouteStateSetter.call(this, routeData)
}

export default pageCreateStateSetter
