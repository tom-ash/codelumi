export function changeInput(attribute, value) {
  this.props.changeInputs({ [attribute]: value })
  this.props.changeControl({ fetch: true })
}