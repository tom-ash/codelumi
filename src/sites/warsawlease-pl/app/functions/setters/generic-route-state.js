function genericRouteStateSetter(routeData) {
  const { changeApp } = this.props
  const { svgs } = routeData

  if (svgs) {
    svgs.map(svg => {
      svgs[svg.name] = svg.pathData
    })
    changeApp({ svgs })
  }
}

export default genericRouteStateSetter
