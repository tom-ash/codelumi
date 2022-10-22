export function onSelectHandler(input, value) {
  const { changeInputs } = this.props

  changeInputs({ [input]: value })
  this.handleErrorOnSelect && this.handleErrorOnSelect(input, value)
}
