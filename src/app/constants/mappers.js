import {
  PAGE,
  VISITOR,
  ANNOUNCEMENT,
  USER
} from '../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    language,
    device,
    path,
    scrollY,
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

  const render = store.render

  const {
    [PAGE]: renderPage,
    [VISITOR]: renderVisitor,
    [ANNOUNCEMENT]: renderAnnouncement,
    [USER]: renderUser
  } = render

  return {
    category,
    district,
    area,
    language,
    device,
    path,
    scrollY,
    statisticsConsent,
    marketingConsent,
    scripts,
    googleAnalyticsLoaded: store.app.scripts.googleAnalytics,
    googleAnalyticsLoading: store.app.scripts.googleAnalyticsLoading,
    scalableVectorGraphics,
    render,
    renderPage,
    renderVisitor,
    renderAnnouncement,
    renderUser
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