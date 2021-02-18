import genericRouteStateSetter from '../../../../../functions/setters/generic-route-state.js'

function pageCreateStateSetter(routeData) {
  const { initialState: { pageCreate: value } } = routeData
  const { dispatch } = this.props
  const { name, langVerUrls } = value
  const body = JSON.stringify(value.body, null, 2)
  const meta = JSON.stringify(value.meta, null, 2)

  const typeInputs = 'page/create/inputs'
  dispatch({ type: typeInputs, value: { ...value, body, meta }})

  const typeData = 'page/create/data'
  dispatch({ type: typeData, value: { name, langVerUrls }})
  
  genericRouteStateSetter.call(this, routeData)
}

export default pageCreateStateSetter
