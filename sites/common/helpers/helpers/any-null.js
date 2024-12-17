function anyNull(valueObject) {
  return Object.values(valueObject).indexOf(null) !== -1;
}

export default anyNull;
