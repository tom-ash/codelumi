import React from 'react'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-plus', { pl: 'Dodaj nieodpłatne ogłoszenie', en: 'Add unpaid announcement'}),
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
    label: this.labelProvider('fas fa-user-plus', { pl: 'Zarejestruj', en: 'Sign Up'}),
    onClick: () => {
      changeApp({ showUserCreate: true })
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function signInManager() {
  const {
    changeApp, resetUserAuthorizeControl, resetUserAuthorizeInputs, changeControl, resetUserAuthorizeErrors, name
  } = this.props

  return {
    display: name && 'none',
    classNames: { container: 'link' },
    label: this.labelProvider('fas fa-sign-in-alt', { pl: 'Zaloguj', en: 'Sign In'}),
    onClick: () => {
      resetUserAuthorizeErrors()
      resetUserAuthorizeInputs()
      resetUserAuthorizeControl()
      changeControl({ showLinks: false })
      changeApp({ showUserAuthorize: true })
    }
  }
}

export function myAccountManager() {
  const { changeApp, changeControl, authorized } = this.props
  
  return {
    display: !authorized && 'none',
    classNames: { container: 'link' },
    label: this.labelProvider('far fa-user-circle', { pl: 'Konto', en: 'Account'}),
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
      const language = this.props.language === 'pl' ? 'en' : 'pl'
      changeApp({ language })
    }
  }
}
