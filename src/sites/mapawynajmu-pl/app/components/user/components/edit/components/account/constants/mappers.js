export const mapStateToProps = store => {
  const { app, data, user, errors } = store
  const { lang } = app
  const { name, accountType } = user
  const { businessName } = data
  const { businessName: businessNameError } = errors

  return {
    lang,
    name,
    accountType,
    businessName,
    businessNameError,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setControl: value => dispatch({ type: 'control', value }),
    setData: value => dispatch({ type: 'data', value }),
    setInputs: value => dispatch({ type: 'inputs', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
    dispatch,
  }
}
