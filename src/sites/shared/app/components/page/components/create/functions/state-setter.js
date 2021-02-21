import genericRouteStateSetter from '../../../../../functions/setters/generic-route-state.js'

function pageCreateStateSetter(routeData) {
  const { dispatch } = this.props
  const { initialState: { pageCreate: names } } = routeData

  const typeInputs = 'page/create/inputs'
  dispatch({ type: typeInputs, value: { name: null }})

  const typeData = 'page/create/data'
  dispatch({ type: typeData, value: { names }})

  genericRouteStateSetter.call(this, { routeData })
}

export default pageCreateStateSetter
