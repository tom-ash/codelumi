function genericRouteStateSetter({ routeData }) {
  const { changeApp, dispatch } = this.props
  const { state } = routeData
  const appState = { urlDataSynced: true }

  if (state) {
    Object.keys(state).map(stateKey => {
      dispatch({ type: stateKey, value: state[stateKey] })
    })
  }

  changeApp(appState)
}

export default genericRouteStateSetter
