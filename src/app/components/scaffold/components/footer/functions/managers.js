const origin = `${CLIENT_URL}/`

export function aboutManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}o-serwisie'`, en: `${origin}about'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'O Serwisie', en: 'About' }),
    label: this.languageHandler('O Serwisie', 'About'),
    onClick: () => changeApp({ showVisitorAbout: true })
  }
}

export function contactManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}kontakt'`, en: `${origin}contact'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Kontakt', en: 'Contact' }),
    label: this.languageHandler('Kontakt', 'Contact'),
    onClick: () => changeApp({ showVisitorContact: true })
  }
}

export function termsOfServiceManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}regulamin'`, en: `${origin}terms-of-service'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Regulamin', en: 'Terms and Conditions' }),
    label: this.languageHandler('Regulamin', 'Terms and Conditions'),
    onClick: () => changeApp({ showVisitorTermsOfService: true })
  }
}

export function cookiesPolicyManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}polityka-plikow-cookies'`, en: `${origin}cookies-policy'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Polityka Plików Cookies', en: 'Cookies Policy' }),
    label: this.languageHandler('Polityka Plików Cookies', 'Cookies Policy'),
    onClick: () => changeApp({ showVisitorCookiesPolicy: true })
  }
}

export function privacyPolicyManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}polityka-prywatnosci'`, en: `${origin}privacy-policy'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Polityka Prywatności', en: 'Privacy Policy' }),
    label: this.languageHandler('Polityka Prywatności', 'Privacy Policy'),
    onClick: () => changeApp({ showVisitorPrivacyPolicy: true })
  }
}

export function privacySettingsManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}ustawienia-prywatnosci'`, en: `${origin}privacy-settings'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Ustawienia Prywatności', en: 'Privacy Settings' }),
    label: this.languageHandler('Ustawienia Prywatności', 'Privacy Settings'),
    onClick: () => changeApp({ showVisitorPrivacySettings: true })
  }
}

export function announcementsListManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${origin}lista_ogloszen'`, en: `${origin}announcements_list'` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Lista Ogłoszeń', en: 'Announcements\' List' }),
    label: this.languageObjectHandler({ pl: 'Lista Ogłoszeń', en: 'Announcements\' List' }),
    onClick: () => changeApp({ showAnnouncementsList: true })
  }
}
