export const mapStateToProps = (store) => {
  const {
    language,
    device,
    path,
    scrollY,
    showAnnouncementCreate,
    showAnnouncementEdit,
    showAnnouncementShow,
    announcementId,
    showAnnouncementIndexVisitorMap,
    showAnnouncementIndexVisitorList,
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
    showVisitorPrivacySettings,
    scripts
  } = store.app

  const {
    statisticsConsent, marketingConsent
  } = store.visitor.legal.privacy.settings

  return {
    language,
    device,
    path,
    scrollY,
    showAnnouncementCreate,
    showAnnouncementEdit,
    showAnnouncementShow,
    announcementId,
    showAnnouncementIndexVisitorMap,
    showAnnouncementIndexVisitorList,
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
    showVisitorPrivacySettings,
    statisticsConsent,
    marketingConsent,
    scripts,
    googleAnalyticsLoaded: store.app.scripts.googleAnalytics,
    googleAnalyticsLoading: store.app.scripts.googleAnalyticsLoading
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAuthorizeData: (value) => dispatch({ type: 'user/authorize/data', value: value }),
    changeApp: (value) => dispatch({ type: 'app', value: value})
  }
}