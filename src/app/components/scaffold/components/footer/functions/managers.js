import {
  LANGS
} from '../../../../../../shared/constants/langs/langs'

import {
  VISITOR_COOKIES_POLICY,
  VISITOR_PRIVACY_SETTINGS,
  VISITOR_TERMS_OF_SERVICE,
  VISITOR_PRIVACY_POLICY,
  VISITOR_CONTACT
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
  const title = this.languageHandler(VISITOR_COOKIES_POLICY_TITLES)

  return {
    classNames: { container: 'link' },
    href: `${CLIENT_URL}/${this.languageHandler(VISITOR_COOKIES_POLICY_URLS)}`,
    hrefLang: this.languageHandler(LANGS),
    title,
    label: title,
    onClick: () => this.changeRoute(VISITOR_COOKIES_POLICY)
  }
}

export function privacySettingsManager() {
  const title = this.languageHandler(VISITOR_PRIVACY_SETTINGS_TITLES)

  return {
    classNames: { container: 'link' },
    href: `${CLIENT_URL}/${this.languageHandler(VISITOR_PRIVACY_SETTINGS_URLS)}`,
    hrefLang: this.languageHandler(LANGS),
    title,
    label: title,
    onClick: () => this.changeRoute(VISITOR_PRIVACY_SETTINGS)
  }
}

export function privacyPolicyManager() {
  const title = this.languageHandler(VISITOR_PRIVACY_POLICY_TITLES)

  return {
    classNames: { container: 'link' },
    href: `${CLIENT_URL}/${this.languageHandler(VISITOR_PRIVACY_POLICY_URLS)}`,
    hrefLang: this.languageHandler(LANGS),
    title,
    label: title,
    onClick: () => this.changeRoute(VISITOR_PRIVACY_POLICY)
  }
}

export function termsOfServiceManager() {
  const title = this.languageHandler(VISITOR_TERMS_OF_SERVICE_TITLES)

  return {
    classNames: { container: 'link' },
    href: `${CLIENT_URL}/${this.languageHandler(VISITOR_TERMS_OF_SERVICE_URLS)}`,
    hrefLang: this.languageHandler(LANGS),
    title,
    label: title,
    onClick: () => this.changeRoute(VISITOR_TERMS_OF_SERVICE)
  }
}

export function contactManager() {
  const title = this.languageHandler(VISITOR_CONTACT_TITLES)

  return {
    classNames: { container: 'link' },
    href: `${CLIENT_URL}/${this.languageHandler(VISITOR_CONTACT_URLS)}`,
    hrefLang: this.languageHandler(LANGS),
    title,
    label: title,
    onClick: () => this.changeRoute(VISITOR_CONTACT)
  }
}
