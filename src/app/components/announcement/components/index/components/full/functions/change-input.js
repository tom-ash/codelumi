export function changeInput(attribute, value) {
  this.props.changeInputs({ [attribute]: value })
  this.props.changeControl({ fetchAmount: true, changed: true })
}