export function termsValidator(value) {
  this.props.changeErrors({ terms: !value })
  return (value)
}

export function privacyValidator(value) {
  this.props.changeErrors({ privacy: !value })
  return (value)
}