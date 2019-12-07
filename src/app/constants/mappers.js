export const mapStateToProps = (store) => {
  const {
    language,
    screenSize,
    path,
    scrollY,
    showAnnouncementCreate,
    showAnnouncementIndexVisitor,
    showAnnouncementIndexUser,
    showUserCreate,
    showUserAuthorize,
    showUserShow,
    showUserEditPasswordReset,
    showUserEditPhoneVerify,
    showUserEditAccount,
    showVisitorAbout,
    showVisitorContact,
    showVisitorTermsOfService,
    showVisitorCookiesPolicy,
    showVisitorPrivacyPolicy,
    showVisitorPrivacySettings
  } = store.app

  return {
    language,
    screenSize,
    path,
    scrollY,
    showAnnouncementCreate,
    showAnnouncementIndexVisitor,
    showAnnouncementIndexUser,
    showUserCreate,
    showUserAuthorize,
    showUserShow,
    showUserEditPasswordReset,
    showUserEditPhoneVerify,
    showUserEditAccount,
    showVisitorAbout,
    showVisitorContact,
    showVisitorTermsOfService,
    showVisitorCookiesPolicy,
    showVisitorPrivacyPolicy,
    showVisitorPrivacySettings
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAuthorizeData: (value) => dispatch({ type: 'user/authorize/data', value: value }),
    changeApp: (value) => dispatch({ type: 'app', value: value})
  }
}