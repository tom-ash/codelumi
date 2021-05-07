import {
  PAGE_TRACK,
  VISITOR_TRACK,
  ANNOUNCEMENT_TRACK,
  USER_TRACK
} from '../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const { lang, device, path, scrollY, scripts, routeSynced } = store.app
  const { statisticsConsent, marketingConsent } = store.visitor.consents
  const { data: announcementCreateData } = store.announcement.create
  const { data: announcementShowData } = store.announcement.show
  const { data: pageShowData } = store.page.show
  const { data: pageEditData } = store.page.edit
  const render = store.render
  const { [PAGE_TRACK]: renderPage, [VISITOR_TRACK]: renderVisitor, [USER_TRACK]: renderUser,  [ANNOUNCEMENT_TRACK]: renderAnnouncement } = render

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
    render,
    renderPage,
    renderVisitor,
    renderAnnouncement,
    renderUser,
    announcementCreateData,
    announcementShowData,
    pageShowData,
    routeSynced,
    pageEditData
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changePageShowData: value => dispatch({ type: 'page/show/data', value }),
    changeUserEditData: value => dispatch({ type: 'user/edit/data', value }),
    changeConsents: value => dispatch({ type: 'visitor/consents', value }),
    dispatch
  }
}