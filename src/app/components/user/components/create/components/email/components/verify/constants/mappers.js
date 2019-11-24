export const mapStateToProps = (store) => {
  const { language } = store.app
  const { verification } = store.user.create.errors
  const { token } = store.user.create.data
  const { publishing: publishingAnnouncement } = store.announcement.create.control
  return {
    language,
    verification,
    token,
    publishingAnnouncement
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeAuthorizeData: (value) => dispatch({ type: 'user/authorize/data', value: value }),
    changeControl: (value) => dispatch({ type: 'user/create/control', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/create/errors', value: value }),
  }
}
  