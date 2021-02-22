function genericRouteStateSetter({ routeData }) {
  const { changeApp, changePageShowData, dispatch } = this.props
  const { svgs, page, state, state: { lang: pageLang } } = routeData
  const appState = { urlDataSynced: true }

  if (pageLang) {
    dispatch({ type: 'app', value: { lang: pageLang } })
  }

  if (state) {
    Object.keys(state).map(stateKey => {
      dispatch({ type: stateKey, value: state[stateKey] })
    })
  }

  if (svgs) {
    svgs.map(svg => {
      svgs[svg.name] = svg.path_data
    })
    appState.svgs = svgs
  }

  if (page) changePageShowData(page)

  changeApp(appState)
}

// TODO HANDLE META

export default genericRouteStateSetter
