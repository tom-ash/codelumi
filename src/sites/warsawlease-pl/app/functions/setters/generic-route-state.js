function genericRouteStateSetter({ routeData }) {
  const { changeApp, changePageShowData, dispatch } = this.props
  const { svgs, page, state } = routeData
  const appState = { urlDataSynced: true }

  console.log("ADADASDSD")

  if (state) {
    console.log("HERE")
    Object.keys(state).map(stateKey => {
      dispatch({ type: stateKey, value: state[stateKey] })
    })
  }

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
