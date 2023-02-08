export function onSelectHandler(input, value) {
  const { setInputs } = this.props

  setInputs({ [input]: value })
  this.handleErrorOnSelect && this.handleErrorOnSelect(input, value)
}
