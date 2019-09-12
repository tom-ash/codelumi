export function errorResetter(field) {
  this.props.changeErrors({ [field]: { polish: '', english: '' } })
}