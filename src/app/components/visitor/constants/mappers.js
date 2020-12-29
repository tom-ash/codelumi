import {
  VISITOR_COOKIES_POLICY,
  VISITOR_PRIVACY_SETTINGS,
  VISITOR_TERMS_OF_SERVICE,
  VISITOR_PRIVACY_POLICY,
  VISITOR_CONTACT
} from '../../../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    language
  } = store.app

  const {
    statisticsConsent,
    marketingConsent
  } = store.visitor.legal.privacy.settings

  const {
    [VISITOR_COOKIES_POLICY]: renderCookiesPolicy,
    [VISITOR_PRIVACY_SETTINGS]: renderPrivacySettings,
    [VISITOR_TERMS_OF_SERVICE]: renderTermsOfService,
    [VISITOR_PRIVACY_POLICY]: renderPrivacyPolicy,
    [VISITOR_CONTACT]: renderContact
  } = store.render

  return {
    language,
    consents: store.visitor.legal.privacy.settings.consents,
    statisticsConsent,
    marketingConsent,
    renderCookiesPolicy,
    renderPrivacySettings,
    renderTermsOfService,
    renderPrivacyPolicy,
    renderContact
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeSettings: value => dispatch({ type: 'visitor/privacy/settings', value })
  }
}
    