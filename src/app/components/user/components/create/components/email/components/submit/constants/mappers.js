export const mapStateToProps = (store) => {
  const {
    language,
    showAnnouncementCreate
  } = store.app

  return {
    language,
    connecting: store.user.create.control.connecting,
    accountType: store.user.create.inputs.accountType,
    showAnnouncementCreate
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeAnnouncementCreateControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeAuthorized: value => dispatch({ type: 'user/authorize/authorized', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    changeData: value => dispatch({ type: 'user/create/data', value }),
    changeErrors: value => dispatch({ type: 'user/create/errors', value })
  }
}
