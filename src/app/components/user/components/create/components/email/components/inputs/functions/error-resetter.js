export function errorResetter(field) {
  console.log(field)
  this.props.changeErrors({ [field]: { polish: '', english: '' } })
}