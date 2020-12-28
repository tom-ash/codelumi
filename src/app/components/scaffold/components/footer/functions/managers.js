const origin = `${CLIENT_URL}/`

export function contactManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}kontakt`, en: `${origin}contact` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Kontakt', en: 'Contact' }),
    label: this.languageHandler('Kontakt', 'Contact'),
    onClick: CHANGE_PATH
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
    onClick: CHANGE_PATH
  }
}

export function cookiesPolicyManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}polityka-cookies`, en: `${origin}cookies-policy` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Polityka Cookies', en: 'Cookies Policy' }),
    label: this.languageHandler('Polityka Cookies', 'Cookies Policy'),
    onClick: CHANGE_PATH
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
    onClick: CHANGE_PATH
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
    onClick: CHANGE_PATH
  }
}
