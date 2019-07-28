export const mapStateToProps = (store) => {
  return {
    authorized: store.user.authorize.data.authorized,
    connecting: store.user.create.control.connecting,
    token: store.user.create.data.token
  }
}

export const mapDispatchToProps = (dispatch) => ({})
