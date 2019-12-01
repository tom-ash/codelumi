import React from 'react'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-plus', { polish: 'Dodaj nieodpłatne ogłoszenie', english: 'Add unpaid announcement'}),
    onClick: () => {
      this.changeRoute({ showAnnouncementCreate: true })
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function signUpManager() {
  const { name, changeApp } = this.props

  return {
    display: name && 'none',
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-user-plus', { polish: 'Zarejestruj', english: 'Sign Up'}),
    onClick: () => {
      changeApp({ showUserCreate: true })
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function signInManager() {
  const { changeApp, changeControl, name } = this.props

  return {
    display: name && 'none',
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-sign-in-alt', { polish: 'Zaloguj', english: 'Sign In'}),
    onClick: () => {
      changeApp({ showUserAuthorize: true })
      changeControl({ showLinks: false })
    }
  }
}

export function myAccountManager() {
  const { changeApp, changeControl, authorized } = this.props
  
  return {
    display: !authorized && 'none',
    classNames: { container: 'link' },
    label: this.labelProvider('far fa-user-circle', { polish: 'Konto', english: 'Account'}),
    onClick: () => {
      changeApp({ showUserShow: true })
      changeControl({ showLinks: false })
    }
  }
}

export function languageManager(action) {
  const { changeApp } = this.props

  return {
    classNames: { container: 'button language' },
    label: <span><i className='fas fa-globe'/> {this.languageHandler('English', 'Polski')}</span>,
    onClick: () => {
      const language = this.props.language === 'polish' ? 'english' : 'polish'
      changeApp({ language })
    }
  }
}