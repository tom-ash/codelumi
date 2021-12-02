export const mapStateToProps = store => {
  const { lang } = store.app
  const { 'announcement/create/verification': renderAnnouncementCreateVerification } = store.render
  const { connecting } = store.user.create.control
  const { email } = store.user.create.inputs
  const { verification } = store.user.create.errors
  const { id: announcementId } = store.announcement.create.data

  return {
    renderAnnouncementCreateVerification,
    lang,
    email,
    verification,
    connecting,
    announcementId
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeAnnouncementCreateControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeAuthorizeData: value => dispatch({ type: 'user/authorize/data', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    changeErrors: value => dispatch({ type: 'user/create/errors', value }),
  }
}
  