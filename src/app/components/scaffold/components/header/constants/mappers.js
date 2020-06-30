export const mapStateToProps = (store) => {

  const {
    language,
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
    showVisitorPrivacySettings
  } = store.app

  const {
    category,
    district,
    area
  } = store.announcement.show.data

  return {
    language,
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
    authorized: store.user.authorize.data.authorized,
    name: store.user.authorize.data.name,
    device: store.app.device,
    showLinks: store.scaffold.header.control.showLinks,
    showUserShow: store.app.showUserShow,
    category,
    district,
    area
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changePath: (value) => dispatch({ type: 'route', value: value}),
    resetAnnouncementIndexControl: (value) => dispatch({ type: 'announcement/index/control/reset', value: value }),
    resetAnnouncementIndexInputs: (value) => dispatch({ type: 'announcement/index/inputs/reset', value: value }),
    resetAnnouncementIndexData: (value) => dispatch({ type: 'announcement/index/data/reset', value: value }),
    changeAnnouncementIndexControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    resetUserAuthorizeControl: (value) => dispatch({ type: 'user/authorize/control/reset', value: value }),
    resetUserAuthorizeInputs: (value) => dispatch({ type: 'user/authorize/inputs/reset', value: value }),
    resetUserAuthorizeErrors: (value) => dispatch({ type: 'user/authorize/errors/reset', value: value }),
    changeControl: (value) => dispatch({ type: 'scaffold/header/control', value: value })
  }
}
  