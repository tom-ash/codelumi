import React from 'react'
import { saveCookie } from '../../../../../functions/cookie-handlers'
import Logo from '../../../../../assets/logo-header.svg'

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
      <div className='logo-and-site'>
        <div className='logo'>
          <Logo />
        </div>
        <div className='site'>
          warsawlease.pl
        </div>
        <div className='float-clear' />
      </div>
    ),
    onClick: () => {
      resetAnnouncementIndexControl()
      resetAnnouncementIndexInputs()
      changeAnnouncementIndexControl({ fetch: true })
      TODO
    }
  }
}

export function addAnnouncementManager() {
  // TODO

  return {
    classNames: { container: 'header-link add-announcement' },
    // href: this.languageObjectHandler({ pl: `${CLIENT_URL}${pl.url}`, en: `${CLIENT_URL}${en.url}` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    // title: this.languageObjectHandler({ pl: pl.title, en: en.title }),
  // label: this.languageObjectHandler({ pl: pl.label, en: en.label }),
    // onClick: () => {
    //   TODO
    // }
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
    label: this.languageObjectHandler({ pl: 'Zarejestruj', en: 'Sign Up' }),
    // onClick: () => {
    //   TODO
    // }
  }
}

export function signInManager() {
  const {
    name
  } = this.props

  return {
    display: name && 'none',
    classNames: { container: 'header-link sign-in' },
    href: this.languageObjectHandler({ pl: `${origin}zaloguj`, en: `${origin}sign-in` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Zaloguj', en: 'Sign In' }),
    label: this.languageObjectHandler({ pl: 'Zaloguj', en: 'Sign In' }),
    // TODO
  }
}

export function myAccountManager() {
  const { changeApp, changeControl, authorized } = this.props
  
  return {
    display: !authorized && 'none',
    classNames: { container: 'header-link' },
    label: this.languageObjectHandler({ pl: 'Konto', en: 'Account' }),
    // onClick: () => {
    //   TODO
    // }
  }
}

export function languageManager() {
  const {
    changeApp,
    language
  } = this.props

  console.log(this.matchPathToLanguage())

  return {
    classNames: { container: 'button language' },
    href: this.matchPathToLanguage(),
    label: this.languageHandler('English', 'Polski'),
    onClick: () => {
      const newLanguage = language === 'pl' ? 'en' : 'pl'

      saveCookie('lang', newLanguage, 'oneYear')
      changeApp({ language: newLanguage })
    }
  }
}
