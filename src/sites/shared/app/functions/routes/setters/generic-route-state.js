function genericRouteStateSetter(state) {
  const { changeApp, dispatch } = this.props
  const appState = { routeSynced: true }

  if (state) {
    Object.keys(state).map(stateKey => {
      dispatch({ type: stateKey, value: state[stateKey] })
    })
  }

  changeApp(appState)
}

export default genericRouteStateSetter
