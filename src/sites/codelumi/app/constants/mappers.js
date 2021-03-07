import {
  PAGE_TRACK,
  VISITOR_TRACK
} from '../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const {
    lang,
    scrollY,
    urlDataSynced
  } = store.app

  const {
    statisticsConsent,
    marketingConsent
  } = store.visitor.legal.privacy.settings

  const {
    data: pageShowData
  } = store.page.show

  const {
    data: pageEditData
  } = store.page.edit
  const render = store.render

  const {
    [VISITOR_TRACK]: renderVisitor,
    [PAGE_TRACK]: renderPage
  } = render

  return {
    lang,
    scrollY,
    urlDataSynced,
    pageShowData,
    pageEditData,
    renderPage,
    renderVisitor,
    statisticsConsent,
    marketingConsent
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeVisitorPrivacySettings: value => dispatch({ type: 'visitor/privacy/settings', value }),
    dispatch
  }
}