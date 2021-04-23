function genericRouteStateSetter({ routeData }) {
  const { changeApp, dispatch } = this.props
  const { state } = routeData
  const appState = { routeSynced: true }

  if (state) {
    Object.keys(state).map(stateKey => {
      dispatch({ type: stateKey, value: state[stateKey] })
    })
  }

  changeApp(appState)
}

export default genericRouteStateSetter
