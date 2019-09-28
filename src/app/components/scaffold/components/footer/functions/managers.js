import React from 'react'
import { managerAgent } from 'managed-inputs'

export function aboutManager(action) {
  return managerAgent(action, {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('O Serwisie', 'About'),
    onClick: () => this.changeRoute(null, 'about')
  })
}

export function contactManager(action) {
  return managerAgent(action, {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('Kontakt', 'Contact'),
    onClick: () => this.changeRoute(null, 'contact')
  })
}

export function termsOfServiceManager(action) {
  return managerAgent(action, {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('Regulamin', 'Terms and Conditions'),
    onClick: () => this.changeRoute(null, 'termsOfService')
  })
}

export function cookiesPolicyManager(action) {
  return managerAgent(action, {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('Polityka Plików Cookies', 'Cookies Policy'),
    onClick: () => this.changeRoute(null, 'cookiesPolicy')
  })
}

export function privacyPolicyManager(action) {
  return managerAgent(action, {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('Polityka Prywatności', 'Privacy Policy'),
    onClick: () => this.changeRoute(null, 'privacyPolicy')
  })
}

export function privacySettingsManager(action) {
  return managerAgent(action, {
    classNames: { container: 'button-container link' },
    label: this.languageHandler('Ustawienia Prywatności', 'Privacy Settings'),
    onClick: () => this.changeRoute(null, 'privacySettings')
  })
}
