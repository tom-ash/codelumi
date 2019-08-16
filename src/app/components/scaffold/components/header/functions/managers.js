import React from 'react'
import { managerAgent } from 'managed-inputs'

export function addAnnouncementManager(action) {
  return managerAgent(action, {
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-plus', { polish: 'Dodaj nieodpłatne ogłoszenie', english: 'Add gratuitous announcement'}),
    onClick: () => {
      this.changeRoute(null, 'addAnnouncement')
      this.props.changeControl({ showLinks: false })
    }
  })
}

export function signUpManager(action) {
  return managerAgent(action, {
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-user-plus', { polish: 'Zarejestruj', english: 'Sign Up'}),
    onClick: () => {
      this.changeRoute(null, 'signUp')
      this.props.changeControl({ showLinks: false })
    }
  })
}

export function signInManager(action) {
  return managerAgent(action, {
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-sign-in-alt', { polish: 'Zaloguj', english: 'Sign In'}),
    onClick: () => {
        this.changeRoute(null, 'signIn')
        this.props.changeControl({ showLinks: false })
    }
  })
}

export function myAccountManager(action) {
  return managerAgent(action, {
    classNames: { container: 'link' },
    label: this.labelProvider('far fa-user-circle', { polish: 'Moje konto', english: 'My account'}),
    onClick: () => {
      this.changeRoute(null, 'myAccount')
      this.props.changeControl({ showLinks: false })
    }
  })
}

export function languageManager(action) {
  return managerAgent(action, {
    classNames: { container: 'button' },
    label: <span><i className='fas fa-globe'/> {this.languageHandler('EN', 'PL')}</span>,
    onClick: () => {
      const language = this.props.language === 'polish' ? 'english' : 'polish'
      this.props.changeLanguage(language)
    }
  })
}