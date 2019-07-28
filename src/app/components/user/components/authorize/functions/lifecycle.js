export function componentDidUpdate() {
  if (this.props.authorized) this.changeRoute(null, '/myaccount')
}