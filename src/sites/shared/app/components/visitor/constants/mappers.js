import {
  VISITOR_PRIVACY_MONIT_TRACK,
  VISITOR_PRIVACY_SETTINGS_TRACK,
  VISITOR_COOKIES_POLICY_TRACK,
  VISITOR_TERMS_OF_SERVICE_TRACK,
  VISITOR_PRIVACY_POLICY_TRACK,
  VISITOR_CONTACT_TRACK
} from '../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const {
    lang
  } = store.app

  const {
    statisticsConsent,
    marketingConsent
  } = store.visitor.legal.privacy.settings

  const {
    [VISITOR_PRIVACY_MONIT_TRACK]: renderPrivacyMonit,
    [VISITOR_COOKIES_POLICY_TRACK]: renderCookiesPolicy,
    [VISITOR_PRIVACY_SETTINGS_TRACK]: renderPrivacySettings,
    [VISITOR_TERMS_OF_SERVICE_TRACK]: renderTermsOfService,
    [VISITOR_PRIVACY_POLICY_TRACK]: renderPrivacyPolicy,
    [VISITOR_CONTACT_TRACK]: renderContact
  } = store.render

  return {
    lang,
    consents: store.visitor.legal.privacy.settings.consents,
    statisticsConsent,
    marketingConsent,
    renderPrivacyMonit,
    renderPrivacySettings,
    renderPrivacyPolicy,
    renderCookiesPolicy,
    renderTermsOfService,
    renderContact
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeSettings: value => dispatch({ type: 'visitor/privacy/settings', value })
  }
}
    