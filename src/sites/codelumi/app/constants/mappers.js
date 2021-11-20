import { PAGE_TRACK, VISITOR_TRACK, ANNOUNCEMENT_TRACK } from '../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const { device, lang, routeSynced, loadGa } = store.app
  const { scrollY } = store.visitor
  const render = store.render
  const {
    [VISITOR_TRACK]: renderVisitor,
    [PAGE_TRACK]: renderPage,
    [ANNOUNCEMENT_TRACK]: renderAnnouncement
  } = render
  const { statisticsConsent, marketingConsent } = store.visitor.consents
  const { data: pageShowData } = store.page.show
  const { data: pageEditData } = store.page.edit
  const { links } = store
  
  return {
    device,
    loadGa,
    lang,
    render,
    routeSynced,
    renderVisitor,
    renderAnnouncement,
    renderPage,
    scrollY,
    pageShowData,
    pageEditData,
    statisticsConsent,
    marketingConsent,
    links
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeConsents: value => dispatch({ type: 'visitor/consents', value }),
    dispatch
  }
}