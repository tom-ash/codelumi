export const mapStateToProps = (store) => {
  const {
    language,
    device,
    path,
    scrollY,
    TODO,
    scripts,
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
    TODO,
    statisticsConsent,
    marketingConsent,
    scripts,
    googleAnalyticsLoaded: store.app.scripts.googleAnalytics,
    googleAnalyticsLoading: store.app.scripts.googleAnalyticsLoading,
    scalableVectorGraphics,
    renderPostShow,
    renderPostCreate,
    postPl,
    postEn
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