function genericRouteStateSetter(routeData) {
  const { changeApp, changePageShowData } = this.props
  const { svgs, page } = routeData
  const appState = { urlDataSynced: true }

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
