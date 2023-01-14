export const mapStateToProps = store => {
  const { lang } = store.app
  const { name, accountType } = store.user.authorize.data
  const { businessName } = store.user.edit.data
  const { businessName: businessNameError } = store.user.edit.errors

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
    dispatch,
    changeControl: value => dispatch({ type: 'user/edit/control', value }),
    changeInputs: value => dispatch({ type: 'user/edit/inputs', value }),
    changeErrors: value => dispatch({ type: 'user/edit/errors', value }),
    changeData: value => dispatch({ type: 'user/edit/data', value }),
  }
}
