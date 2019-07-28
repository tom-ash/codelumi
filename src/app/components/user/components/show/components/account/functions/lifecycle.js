export function componentDidMount() {
  this.props.name === null && this.changeRoute(null, '/signin')
}

export function componentDidUpdate() {
  this.props.name === null && this.changeRoute(null, '/signin')
}