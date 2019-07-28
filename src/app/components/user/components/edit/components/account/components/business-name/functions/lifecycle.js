export function componentWillUnmount() {
  this.props.resetControl()
  this.props.resetInputs()
  // TODO: this.props.resetData()
  this.props.resetErrors()
}