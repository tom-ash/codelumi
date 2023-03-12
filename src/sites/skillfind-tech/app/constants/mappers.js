export const mapStateToProps = store => {
  const {
    app,
    render,
    visitor,
    data,
    links,
  } = store
  const { device, lang, loadGa } = app
  const { visitor: renderVisitor, user: renderUser, page: renderPage, announcement: renderAnnouncement, image: renderImage, renderPostingIndex } = render
  const { scrollY } = visitor
  const { consents } = visitor
  const { statisticsConsent, marketingConsent } = consents

  return {
    device,
    loadGa,
    lang,
    render,
    renderVisitor,
    renderAnnouncement,
    renderUser,
    renderPostingIndex,
    renderPage,
    renderImage,
    scrollY,
    statisticsConsent,
    marketingConsent,
    links,
    ...data,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setApp: value => dispatch({ type: 'app', value }),
    changeConsents: value => dispatch({ type: 'visitor/consents', value }),
    dispatch,
  }
}
