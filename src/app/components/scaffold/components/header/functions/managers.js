import React from 'react'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-plus', { polish: 'Dodaj nieodpłatne ogłoszenie', english: 'Add unpaid announcement'}),
    onClick: () => {
      this.changeRoute(null, 'addAnnouncement')
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function signUpManager() {
  const { name } = this.props

  return {
    display: name && 'none',
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-user-plus', { polish: 'Zarejestruj', english: 'Sign Up'}),
    onClick: () => {
      this.changeRoute(null, 'signUp')
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function signInManager() {
  const { changeShowUser, changeUserCreateControl, name } = this.props

  return {
    display: name && 'none',
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-sign-in-alt', { polish: 'Zaloguj', english: 'Sign In'}),
    onClick: () => {
        changeUserCreateControl({ showCreate: true })
        changeShowUser(true)
        this.props.changeControl({ showLinks: false })
    }
  }
}

export function myAccountManager(action) {
  const { name } = this.props
  
  return {
    display: !name && 'none',
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
    label: <span><i className='fas fa-globe'/> {this.languageHandler('English', 'Polski')}</span>,
    onClick: () => {
      const language = this.props.language === 'polish' ? 'english' : 'polish'
      this.props.changeLanguage(language)
    }
  }
}