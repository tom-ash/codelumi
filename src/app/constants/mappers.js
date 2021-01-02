import {
  PAGE_TRACK,
  VISITOR_TRACK,
  ANNOUNCEMENT_TRACK,
  USER_TRACK
} from '../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    language,
    device,
    path,
    scrollY,
    scripts,
    scalableVectorGraphics,
    shouldMatchRouteToRenderAndLanguage
  } = store.app

  const {
    statisticsConsent, marketingConsent
  } = store.visitor.legal.privacy.settings

  const {
    data: announcementShowData
  } = store.announcement.show

  const render = store.render

  const {
    [PAGE_TRACK]: renderPage,
    [VISITOR_TRACK]: renderVisitor,
    [ANNOUNCEMENT_TRACK]: renderAnnouncement,
    [USER_TRACK]: renderUser
  } = render

  return {
    
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
    renderUser,
    announcementShowData,
    shouldMatchRouteToRenderAndLanguage
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAuthorizeData: value => dispatch({ type: 'user/authorize/data', value }),
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changePageShowData: value => dispatch({ type: 'page/show/data', value })
  }
}