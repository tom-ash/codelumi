import genericRouteStateSetter from '../../../../../functions/routes/setters/generic-route-state.js'

function pageEditStateSetter(state) {
  const { 'page/edit': value } = state
  const { dispatch } = this.props
  const { name, langVerUrls } = value
  const body = JSON.stringify(value.body, null, 2)
  const meta = JSON.stringify(value.meta, null, 2)

  const typeInputs = 'page/edit/inputs'
  dispatch({ type: typeInputs, value: { ...value, body, meta }})

  const typeData = 'page/edit/data'
  dispatch({ type: typeData, value: { name, langVerUrls }})
  
  genericRouteStateSetter.call(this, state)
}

export default pageEditStateSetter
