export const mapStateToProps = (store) => {
  const { language } = store.app
  const { connecting } = store.user.create.control
  const { token } = store.user.create.data
  const { verification } = store.user.create.errors
  const { publishing: publishingAnnouncement } = store.announcement.create.control
  
  return {
    language,
    verification,
    token,
    publishingAnnouncement,
    connecting
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeAuthorizeData: value => dispatch({ type: 'user/authorize/data', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    changeErrors: value => dispatch({ type: 'user/create/errors', value }),
  }
}
  