export function componentDidMount() {
  this.sendEmail()
}

export function componentWillUnmount() {
  this.props.resetControl()
  this.props.resetErrors()
}
