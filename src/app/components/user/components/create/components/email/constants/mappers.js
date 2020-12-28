export const mapStateToProps = (store) => {
  const {
    TODO
  } = store.app

  const {
    authorized
  } = store.user.authorize.data

  const {
    connecting
  } = store.user.create.control

  const {
    token
  } = store.user.create.data

  return {
    TODO,
    authorized,
    connecting,
    token
  }
}

export const mapDispatchToProps = (dispatch) => ({})
