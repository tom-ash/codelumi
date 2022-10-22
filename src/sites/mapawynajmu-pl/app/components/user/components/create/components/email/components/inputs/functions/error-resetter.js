function errorResetter(field) {
  const { dispatch } = this.props

  dispatch({ type: 'user/create/errors', value: { [field]: { pl: '', en: '' } } })
}

export default errorResetter
