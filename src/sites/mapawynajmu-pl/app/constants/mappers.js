export const mapStateToProps = store => {
  const render = store.render
  const {
    renderBlank,
    page: renderPage,
    visitor: renderVisitor,
    user: renderUser,
    announcement: renderAnnouncement,
    image: renderImage,
    'announcement/index/map': renderListingIndexMap,
  } = render
  const { lang, device, path, scrollY, scripts, routeSynced, loadGa } = store.app
  const { statisticsConsent, marketingConsent } = store.visitor.consents
  const { authorized, admin } = store.user
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
    routeSynced,
    authorized,
    admin,
    links,
    renderImage,
    renderListingIndexMap,
    renderBlank,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setApp: value => dispatch({ type: 'app', value }),
    setControl: value => dispatch({ type: 'control', value }),
    changePageShowData: value => dispatch({ type: 'page/show/data', value }),
    changeConsents: value => dispatch({ type: 'visitor/consents', value }),
    dispatch,
  }
}
