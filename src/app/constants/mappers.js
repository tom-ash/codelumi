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
    scalableVectorGraphics,
    showSiteMap
  } = store.app

  const {
    statisticsConsent, marketingConsent
  } = store.visitor.legal.privacy.settings

  const {
    category,
    district,
    area
  } = store.announcement.show.data

  const {
    show: renderPostShow,
    create: renderPostCreate
  } = store.post.render

  const {
    pl: postPl,
    en: postEn
  } = store.post.show.data

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
    scalableVectorGraphics,
    renderPostShow,
    renderPostCreate,
    postPl,
    postEn,
    showSiteMap
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAuthorizeData: value => dispatch({ type: 'user/authorize/data', value }),
    changeApp: value => dispatch({ type: 'app', value: value}),
    changePostRender: value => dispatch({ type: 'post/render', value: value}),
    changePostShowData: value => dispatch({ type: 'post/show/data', value })
  }
}