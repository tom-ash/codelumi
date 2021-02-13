function genericRouteStateSetter(routeData) {
  const { changeApp } = this.props
  const { svgs } = routeData
  const appState = { routeDataSet: true }

  if (svgs) {
    svgs.map(svg => {
      svgs[svg.name] = svg.pathData
    })
    appState.svgs = svgs
  }

  changeApp(appState)
}

export default genericRouteStateSetter
