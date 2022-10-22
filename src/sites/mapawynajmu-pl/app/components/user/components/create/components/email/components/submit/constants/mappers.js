export const mapStateToProps = store => {
  const { 'user/create/form': renderUserCreate } = store.render
  const { lang } = store.app
  const { accountType, email } = store.user.create.inputs

  return {
    renderUserCreate,
    lang,
    connecting: store.user.create.control.connecting,
    accountType,
    email,
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
