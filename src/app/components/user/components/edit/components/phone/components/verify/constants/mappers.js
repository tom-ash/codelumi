export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    announcementPublishing: store.announcement.create.control.publishing,
    authorized: store.user.authorize.data.authorized,
    phoneVerified: store.user.authorize.data.phoneVerified,
    connecting: store.user.edit.control.connecting,
    phoneVerificationStarted: store.user.edit.control.phoneVerificationStarted,
    phoneVerificationSent: store.user.edit.control.phoneVerificationSent,
    error: store.user.edit.errors.phoneVerification
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value }),
    changeAnnouncementControl: (value) => dispatch({ type: 'announcement/create/control', value: value }),
    changeAuthorizeData: (value) => dispatch({ type: 'user/authorize/data', value: value }),
    changeControl: (value) => dispatch({ type: 'user/edit/control', value: value }),
    changeErrors: (value) => dispatch({ type: 'user/edit/errors', value: value })
  }
}
    