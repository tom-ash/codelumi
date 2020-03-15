export function onSelectHandler(input, value) {
  const { changeInputs } = this.props
  
  changeInputs({ [input]: value })
  this.handleErrorOnSelect(input, value)
}