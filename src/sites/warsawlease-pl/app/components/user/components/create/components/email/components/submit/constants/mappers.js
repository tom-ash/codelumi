export const mapStateToProps = store => {
  const {
    lang,
    svgs
  } = store.app

  return {
    lang,
    connecting: store.user.create.control.connecting,
    accountType: store.user.create.inputs.accountType,
    svgs
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeAuthorized: value => dispatch({ type: 'user/authorize/authorized', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    changeData: value => dispatch({ type: 'user/create/data', value }),
    changeErrors: value => dispatch({ type: 'user/create/errors', value })
  }
}
