import React from 'react'
import { saveCookie } from '../../../../../functions/cookie-handlers'
import Logo from '../logo.svg';

const origin = `${CLIENT_URL}/`

export function titleManager() {
  const {
    resetAnnouncementIndexControl,
    resetAnnouncementIndexInputs,
    changeAnnouncementIndexControl
  } = this.props

  return {
    classNames: { container: '' },
    href: CLIENT_URL,
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: 'warsawlease.pl',
    label: (
      <div className='logo-and-title'>
        <div className='logo'>
          <Logo width="36px" height="36px"/>
        </div>
        <div className='title'>
          warsawlease.pl
        </div>
        <div className='float-clear' />
      </div>
    ),
    onClick: () => {
      resetAnnouncementIndexControl()
      resetAnnouncementIndexInputs()
      changeAnnouncementIndexControl({ fetch: true })
      this.changePath({ showAnnouncementIndexMap: true })
    }
  }
}

export function addAnnouncementManager() {
  return {
    classNames: { container: 'header-link add-announcement' },
    href: this.languageObjectHandler({ pl: `${origin}dodaj-ogloszenie`, en: `${origin}add-announcement` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Dodaj ogłoszenie', en: 'Add Announcement' }),
    label: <strong>{this.labelProvider('fas fa-plus', 'Dodaj bezpłatne ogłoszenie', 'Add Free Announcement')}</strong>,
    onClick: () => {
      this.changePath({ showAnnouncementCreate: true })
      this.props.changeControl({ showLinks: false })
    }
  }
}

export function signUpManager() {
  const { name, changeApp } = this.props

  return {
    display: name && 'none',
    classNames: { container: 'header-link' },
    href: this.languageObjectHandler({ pl: `${origin}zarejestruj`, en: `${origin}sign-up` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Zarejestruj', en: 'Sign Up' }),
    label: this.labelProvider('fas fa-user-plus', 'Zarejestruj', 'Sign Up'),
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
    classNames: { container: 'header-link sign-in' },
    href: this.languageObjectHandler({ pl: `${origin}zaloguj`, en: `${origin}sign-in` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Zaloguj', en: 'Sign In' }),
    label: this.labelProvider('fas fa-sign-in-alt', 'Zaloguj', 'Sign In'),
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
    classNames: { container: 'header-link' },
    label: this.labelProvider('far fa-user-circle', 'Konto', 'Account'),
    onClick: () => {
      changeApp({ showUserShow: true })
      changeControl({ showLinks: false })
    }
  }
}

export function languageManager() {
  const {
    changeApp,
    language
  } = this.props

  return {
    classNames: { container: 'button language' },
    href: `${CLIENT_URL}${this.matchPathToLanguage()}`,
    label: <span><i className='fas fa-globe'/> {this.languageHandler('English', 'Polski')}</span>,
    onClick: () => {
      const newLanguage = language === 'pl' ? 'en' : 'pl'

      saveCookie('lang', newLanguage, 'oneYear')
      changeApp({ language: newLanguage })
    }
  }
}
