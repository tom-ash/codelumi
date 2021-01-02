import routes from '../../constants/routes/routes'

export function getRouteByRender({
  render,
  lang
}) {
  return routes.find(route =>
    render[route.track] &&
    route.lang === lang
  )
}
