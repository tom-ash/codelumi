const origin = `${CLIENT_URL}/`
import routes from '../../../../../../shared/constants/routes/routes'

import {
  VISITOR_COOKIES_POLICY,
  VISITOR_PRIVACY_SETTINGS,
  VISITOR_TERMS_OF_SERVICE,
  VISITOR_PRIVACY_POLICY,
  VISITOR_CONTACT
} from '../../../../../../shared/constants/tracks/tracks'

// const VISITOR_COOKIES_POLICY_ROUTE_PL = routes.find(route => )

export function cookiesPolicyManager() {
  console.log(routes)

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}polityka-cookies`, en: `${origin}cookies-policy` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Polityka Cookies', en: 'Cookies Policy' }),
    label: this.languageHandler('Polityka Cookies', 'Cookies Policy'),
    onClick: () => this.changeRoute(VISITOR_COOKIES_POLICY)
  }
}

export function privacySettingsManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}ustawienia-prywatnosci`, en: `${origin}privacy-settings` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Ustawienia Prywatności', en: 'Privacy Settings' }),
    label: this.languageHandler('Ustawienia Prywatności', 'Privacy Settings'),
    onClick: () => this.changeRoute(VISITOR_PRIVACY_SETTINGS)
  }
}

export function termsOfServiceManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}regulamin`, en: `${origin}terms-of-service` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Regulamin', en: 'Terms and Conditions' }),
    label: this.languageHandler('Regulamin', 'Terms and Conditions'),
    onClick: () => this.changeRoute(VISITOR_TERMS_OF_SERVICE)
  }
}

export function privacyPolicyManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}polityka-prywatnosci`, en: `${origin}privacy-policy` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Polityka Prywatności', en: 'Privacy Policy' }),
    label: this.languageHandler('Polityka Prywatności', 'Privacy Policy'),
    onClick: () => this.changeRoute(VISITOR_PRIVACY_POLICY)
  }
}

export function contactManager() {
  const { changeRender } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}kontakt`, en: `${origin}contact` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Kontakt', en: 'Contact' }),
    label: this.languageHandler('Kontakt', 'Contact'),
    onClick: () => this.changeRoute(VISITOR_CONTACT)
  }
}
