import React from 'react'

export function addAnnouncementManager(action) {
  return {
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-plus', { polish: 'Dodaj nieodpłatne ogłoszenie', english: 'Add unpaid announcement'}),
    onClick: () => {
      this.changeRoute(null, 'addAnnouncement')
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function signUpManager(action) {
  return {
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-user-plus', { polish: 'Zarejestruj', english: 'Sign Up'}),
    onClick: () => {
      this.changeRoute(null, 'signUp')
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function signInManager(action) {
  return {
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-sign-in-alt', { polish: 'Zaloguj', english: 'Sign In'}),
    onClick: () => {
        this.changeRoute(null, 'signIn')
        this.props.changeControl({ showLinks: false })
    }
  }
}

export function myAccountManager(action) {
  return {
    classNames: { container: 'link' },
    label: this.labelProvider('far fa-user-circle', { polish: 'Konto', english: 'Account'}),
    onClick: () => {
      this.changeRoute(null, 'myAccount')
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function languageManager(action) {
  return {
    classNames: { container: 'button language' },
    label: <span><i className='fas fa-globe'/> {this.languageHandler('EN', 'PL')}</span>,
    onClick: () => {
      const language = this.props.language === 'polish' ? 'english' : 'polish'
      this.props.changeLanguage(language)
    }
  }
}