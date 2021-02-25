function genericRouteStateSetter({ routeData }) {
  const { changeApp, dispatch } = this.props
  const { state, state: { lang: pageLang } } = routeData
  const appState = { urlDataSynced: true }

  if (pageLang) {
    dispatch({ type: 'app', value: { lang: pageLang } })
  }

  if (state) {
    Object.keys(state).map(stateKey => {
      dispatch({ type: stateKey, value: state[stateKey] })
    })
  }

  changeApp(appState)
}

// TODO HANDLE META

export default genericRouteStateSetter
