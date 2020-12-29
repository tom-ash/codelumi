const origin = `${CLIENT_URL}/`
import {
  PL,
  EN,
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

export function cookiesPolicyManager() {
  const title = this.languageHandler(VISITOR_COOKIES_POLICY_URLS)

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
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageHandler({ pl: `${origin}ustawienia-prywatnosci`, en: `${origin}privacy-settings` }),
    hrefLang: this.languageHandler({ pl: 'pl', en: 'en' }),
    title: this.languageHandler({ pl: 'Ustawienia Prywatności', en: 'Privacy Settings' }),
    label: this.languageHandler('Ustawienia Prywatności', 'Privacy Settings'),
    onClick: () => this.changeRoute(VISITOR_PRIVACY_SETTINGS)
  }
}

export function termsOfServiceManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageHandler({ pl: `${origin}regulamin`, en: `${origin}terms-of-service` }),
    hrefLang: this.languageHandler({ pl: 'pl', en: 'en' }),
    title: this.languageHandler({ pl: 'Regulamin', en: 'Terms and Conditions' }),
    label: this.languageHandler('Regulamin', 'Terms and Conditions'),
    onClick: () => this.changeRoute(VISITOR_TERMS_OF_SERVICE)
  }
}

export function privacyPolicyManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageHandler({ pl: `${origin}polityka-prywatnosci`, en: `${origin}privacy-policy` }),
    hrefLang: this.languageHandler({ pl: 'pl', en: 'en' }),
    title: this.languageHandler({ pl: 'Polityka Prywatności', en: 'Privacy Policy' }),
    label: this.languageHandler('Polityka Prywatności', 'Privacy Policy'),
    onClick: () => this.changeRoute(VISITOR_PRIVACY_POLICY)
  }
}

export function contactManager() {
  const { changeRender } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageHandler({ pl: `${origin}kontakt`, en: `${origin}contact` }),
    hrefLang: this.languageHandler({ pl: 'pl', en: 'en' }),
    title: this.languageHandler({ pl: 'Kontakt', en: 'Contact' }),
    label: this.languageHandler('Kontakt', 'Contact'),
    onClick: () => this.changeRoute(VISITOR_CONTACT)
  }
}
