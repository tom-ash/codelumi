export const mapStateToProps = store => {
  const render = store.render
  const {
    page: renderPage,
    visitor: renderVisitor,
    user: renderUser,
    announcement: renderAnnouncement,
    image: renderImage,
  } = render
  const { lang, device, path, scrollY, scripts, routeSynced, loadGa } = store.app
  const { statisticsConsent, marketingConsent } = store.visitor.consents
  const { data: pageShowData } = store.page.show
  const { data: pageEditData } = store.page.edit
  const { data: announcementEditData } = store.announcement.create
  const { authorized, admin } = store.user.authorize.data
  const { links } = store

  return {
    loadGa,
    lang,
    device,
    path,
    scrollY,
    statisticsConsent,
    marketingConsent,
    scripts,
    render,
    renderPage,
    renderVisitor,
    renderAnnouncement,
    renderUser,
    announcementEditData,
    pageShowData,
    routeSynced,
    pageEditData,
    authorized,
    admin,
    links,
    renderImage,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changePageShowData: value => dispatch({ type: 'page/show/data', value }),
    changeUserEditData: value => dispatch({ type: 'user/edit/data', value }),
    changeConsents: value => dispatch({ type: 'visitor/consents', value }),
    dispatch,
  }
}
