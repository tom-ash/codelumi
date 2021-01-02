export const mapStateToProps = (store) => {
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
    authorized,
    connecting,
    token
  }
}

export const mapDispatchToProps = (dispatch) => ({})
