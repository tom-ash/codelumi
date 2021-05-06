import { PAGE_TRACK, VISITOR_TRACK } from '../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const { lang, routeSynced } = store.app
  const { scrollY } = store.visitor
  const render = store.render
  const { [VISITOR_TRACK]: renderVisitor, [PAGE_TRACK]: renderPage } = render
  const { statistics: statisticsConsent, marketing: marketingConsent } = store.visitor.consents
  const { data: pageShowData } = store.page.show
  const { data: pageEditData } = store.page.edit
  
  return { lang, routeSynced, renderPage, renderVisitor, scrollY, pageShowData, pageEditData, statisticsConsent, marketingConsent }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeVisitorConsents: value => dispatch({ type: 'visitor/consents', value }),
    dispatch
  }
}