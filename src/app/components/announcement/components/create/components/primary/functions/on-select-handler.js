export function onSelectHandler(input, value) {
  this.props.changeInputs({ [input]: value })
  this.handleErrorOnSelect(input, value)
}