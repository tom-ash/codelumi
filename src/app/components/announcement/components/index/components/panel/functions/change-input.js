export function changeInput(inputName, kind, value) {
  let min, max
  if (kind == 'min') {
    min = value
    max = this.props[`${inputName}Max`]
    if (min !== '' && min > max) max = ''
  } else {
    min = this.props[`${inputName}Min`]
    max = value
    if (max !== '' && max < min) min = ''
  }
  this.props.changeInputs({
    [`${inputName}Min`]: min,
    [`${inputName}Max`]: max,
    offset: 0
  })
  this.props.changeControl({ fetch: true })
}
