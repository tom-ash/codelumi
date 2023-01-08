export const mapStateToProps = store => {
  const { 'user/create/form': renderUserCreate } = store.render
  const { lang } = store.app
  const { accountType, businessName, emailAddress, password } = store.user.create.inputs
  const { connecting } = store.user.create.control

  return {
    renderUserCreate,
    accountType,
    emailAddress,
    password,
    businessName,
    lang,
    connecting,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeAuthorized: value => dispatch({ type: 'user/authorize/authorized', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    changeData: value => dispatch({ type: 'user/create/data', value }),
    changeErrors: value => dispatch({ type: 'user/create/errors', value }),
    dispatch,
  }
}
