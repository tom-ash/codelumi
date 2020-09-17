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
    showAnnouncementIndexMap,
    showAnnouncementIndexCatalogue,
    showAnnouncementIndexList,
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
    showBlog,
    scripts,
    showNotFound,
    scalableVectorGraphics
  } = store.app

  const {
    statisticsConsent, marketingConsent
  } = store.visitor.legal.privacy.settings

  const {
    category,
    district,
    area
  } = store.announcement.show.data

  return {
    category,
    district,
    area,
    language,
    device,
    path,
    scrollY,
    showAnnouncementCreate,
    showAnnouncementEdit,
    showAnnouncementShow,
    announcementId,
    showAnnouncementIndexMap,
    showAnnouncementIndexCatalogue,
    showAnnouncementIndexList,
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
    showBlog,
    scripts,
    googleAnalyticsLoaded: store.app.scripts.googleAnalytics,
    googleAnalyticsLoading: store.app.scripts.googleAnalyticsLoading,
    showNotFound,
    scalableVectorGraphics
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAuthorizeData: (value) => dispatch({ type: 'user/authorize/data', value }),
    changeApp: (value) => dispatch({ type: 'app', value: value})
  }
}