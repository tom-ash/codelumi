import {
  PAGE_TRACK,
  VISITOR_TRACK,
  ANNOUNCEMENT_TRACK,
  USER_TRACK
} from '../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const {
    lang,
    device,
    path,
    scrollY,
    scripts,
    svgs,
    urlDataSynced
  } = store.app
  const {
    statisticsConsent,
    marketingConsent
  } = store.visitor.legal.privacy.settings
  const {
    data: announcementCreateData
  } = store.announcement.create
  const {
    data: announcementShowData
  } = store.announcement.show
  const {
    data: pageShowData
  } = store.page.show
  const {
    data: pageCreateData
  } = store.page.create
  const render = store.render
  const {
    [VISITOR_TRACK]: renderVisitor,
    [ANNOUNCEMENT_TRACK]: renderAnnouncement,
    [USER_TRACK]: renderUser,
    [PAGE_TRACK]: renderPage
  } = render

  return {
    lang,
    device,
    path,
    scrollY,
    statisticsConsent,
    marketingConsent,
    scripts,
    googleAnalyticsLoaded: store.app.scripts.googleAnalytics,
    googleAnalyticsLoading: store.app.scripts.googleAnalyticsLoading,
    svgs,
    render,
    renderPage,
    renderVisitor,
    renderAnnouncement,
    renderUser,
    announcementCreateData,
    announcementShowData,
    pageShowData,
    urlDataSynced,
    pageCreateData
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeUserAuthorizeData: value => dispatch({ type: 'user/authorize/data', value }),
    changePageShowData: value => dispatch({ type: 'page/show/data', value }),
    changeAnnouncementIndexData: value => dispatch({ type: 'announcement/index/data', value }),
    changeAnnouncementIndexControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeAnnouncementShowData: value => dispatch({ type: 'announcement/show/data', value }),
    changeUserEditData: value => dispatch({ type: 'user/edit/data', value }),
    changeVisitorPrivacySettings: value => dispatch({ type: 'visitor/privacy/settings', value }),
    dispatch
  }
}