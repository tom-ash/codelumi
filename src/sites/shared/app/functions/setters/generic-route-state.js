function genericRouteStateSetter({ routeData }) {
  const { changeApp, changePageShowData, dispatch } = this.props
  const { svgs, page, initialState } = routeData
  const appState = { urlDataSynced: true }

  if (initialState) {
    Object.keys(initialState).map(stateKey => {
      dispatch({ type: stateKey, value: initialState[stateKey] })
    })
  }

  console.log("HERE")

  if (svgs) {
    svgs.map(svg => {
      svgs[svg.name] = svg.pathData
    })
    appState.svgs = svgs
  }

  if (page) changePageShowData(page)

  changeApp(appState)
}

export default genericRouteStateSetter
