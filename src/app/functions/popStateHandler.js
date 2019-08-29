export function popStateHandler() {
  this.props.changePath(window.location.pathname)
}