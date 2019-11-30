export function aboutManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('O Serwisie', 'About'),
    onClick: () => changeApp({ showVisitorAbout: true })
  }
}

export function contactManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('Kontakt', 'Contact'),
    onClick: () => changeApp({ showVisitorContact: true })
  }
}

export function termsOfServiceManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('Regulamin', 'Terms and Conditions'),
    onClick: () => changeApp({ showVisitorTermsOfService: true })
  }
}

export function cookiesPolicyManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('Polityka Plików Cookies', 'Cookies Policy'),
    onClick: () => changeApp({ showVisitorCookiesPolicy: true })
  }
}

export function privacyPolicyManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('Polityka Prywatności', 'Privacy Policy'),
    onClick: () => changeApp({ showVisitorPrivacyPolicy: true })
  }
}

export function privacySettingsManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('Ustawienia Prywatności', 'Privacy Settings'),
    onClick: () => changeApp({ showVisitorPrivacySettings: true })
  }
}
