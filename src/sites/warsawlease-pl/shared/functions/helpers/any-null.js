export function anyNull(valueObject) {

  console.log(valueObject)

  return Object.values(valueObject).indexOf(null) !== -1
}
