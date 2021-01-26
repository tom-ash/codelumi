export function errorResetter(field) {
  this.props.changeErrors({ [field]: { pl: '', en: '' } })
}