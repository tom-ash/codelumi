import {
  LANGS
} from '../../../../../../shared/constants/langs/langs'
import {
  VISITOR_COOKIES_POLICY_TRACK,
  VISITOR_PRIVACY_SETTINGS_TRACK,
  VISITOR_TERMS_OF_SERVICE_TRACK,
  VISITOR_PRIVACY_POLICY_TRACK,
  VISITOR_CONTACT_TRACK
} from '../../../../../../shared/constants/tracks/tracks'
import {
  VISITOR_COOKIES_POLICY_URLS,
  VISITOR_PRIVACY_SETTINGS_URLS,
  VISITOR_PRIVACY_POLICY_URLS,
  VISITOR_TERMS_OF_SERVICE_URLS,
  VISITOR_CONTACT_URLS
} from '../../../../../../shared/constants/routes/urls'
import {
  VISITOR_COOKIES_POLICY_TITLES,
  VISITOR_PRIVACY_SETTINGS_TITLES,
  VISITOR_PRIVACY_POLICY_TITLES,
  VISITOR_TERMS_OF_SERVICE_TITLES,
  VISITOR_CONTACT_TITLES
} from '../../../../../../shared/constants/routes/titles'

export function cookiesPolicyManager() {
  const { changeRoute } = this.context
  const title = this.langHandler(VISITOR_COOKIES_POLICY_TITLES)
  const href = `${CLIENT_URL}/${this.langHandler(VISITOR_COOKIES_POLICY_URLS)}`
  const track = VISITOR_COOKIES_POLICY_TRACK

  return {
    classNames: { container: 'link' },
    href,
    hrefLang: this.langHandler(LANGS),
    title,
    label: title,
    onClick: () => changeRoute({ href, track })
  }
}

export function privacySettingsManager() {
  const { changeRoute } = this.context
  const title = this.langHandler(VISITOR_PRIVACY_SETTINGS_TITLES)
  const href = `${CLIENT_URL}/${this.langHandler(VISITOR_PRIVACY_SETTINGS_URLS)}`
  const track = VISITOR_PRIVACY_SETTINGS_TRACK

  return {
    classNames: { container: 'link' },
    href,
    hrefLang: this.langHandler(LANGS),
    title,
    label: title,
    onClick: () => changeRoute({ href, track })
  }
}

export function privacyPolicyManager() {
  const { changeRoute } = this.context
  const title = this.langHandler(VISITOR_PRIVACY_POLICY_TITLES)
  const href = `${CLIENT_URL}/${this.langHandler(VISITOR_PRIVACY_POLICY_URLS)}`
  const track = VISITOR_PRIVACY_POLICY_TRACK

  return {
    classNames: { container: 'link' },
    href,
    hrefLang: this.langHandler(LANGS),
    title,
    label: title,
    onClick: () => changeRoute({ href, track })
  }
}

export function termsOfServiceManager() {
  const { changeRoute } = this.context
  const title = this.langHandler(VISITOR_TERMS_OF_SERVICE_TITLES)
  const href = `${CLIENT_URL}/${this.langHandler(VISITOR_TERMS_OF_SERVICE_URLS)}`
  const track = VISITOR_TERMS_OF_SERVICE_TRACK

  return {
    classNames: { container: 'link' },
    href,
    hrefLang: this.langHandler(LANGS),
    title,
    label: title,
    onClick: () => changeRoute({ href, track })
  }
}

export function contactManager() {
  const { changeRoute } = this.context
  const title = this.langHandler(VISITOR_CONTACT_TITLES)
  const href = `${CLIENT_URL}/${this.langHandler(VISITOR_CONTACT_URLS)}`
  const track = VISITOR_CONTACT_TRACK

  return {
    classNames: { container: 'link' },
    href,
    hrefLang: this.langHandler(LANGS),
    title,
    label: title,
    onClick: () => changeRoute({ href, track })
  }
}
