export const mapStateToProps = (store) => {
  const {
    showAnnouncementCreate
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
    showAnnouncementCreate,
    authorized,
    connecting,
    token
  }
}

export const mapDispatchToProps = (dispatch) => ({})
