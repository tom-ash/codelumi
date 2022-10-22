export const mapStateToProps = store => {
  const { lang } = store.app
  const { name, accountType } = store.user.authorize.data

  return {
    lang,
    name,
    accountType,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'user/edit/control', value }),
    changeInputs: value => dispatch({ type: 'user/edit/inputs', value }),
    changeErrors: value => dispatch({ type: 'user/edit/errors', value }),
    changeData: value => dispatch({ type: 'user/edit/data', value }),
  }
}
