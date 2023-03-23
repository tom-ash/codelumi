export const mapStateToProps = store => {
  const { app, render, visitor, data, links } = store
  const { device, lang, loadGa } = app
  const {
    visitor: renderVisitor,
    user: renderUser,
    page: renderPage,
    announcement: renderAnnouncement,
    image: renderImage,
    renderPostingIndex,
  } = render
  const { statisticsConsent, marketingConsent } = visitor

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
    statisticsConsent,
    marketingConsent,
    links,
    ...data,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setApp: value => dispatch({ type: 'app', value }),
    changeConsents: value => dispatch({ type: 'visitor', value }),
    dispatch,
  }
}
