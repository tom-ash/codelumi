export function popStateHandler() {
  const { changeApp } = this.props

  changeApp({ path: window.location.pathname })
}