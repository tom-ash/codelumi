import React from 'react'
import { saveCookie } from '../../../../../functions/cookie-handlers'
import Logo from '../../../../../assets/logo-header.svg'
import {
  LANGS
} from '../../../../../../shared/constants/langs/langs'
import {
  ROOT_TRACK,
  ANNOUNCEMENT_CREATE_TRACK,
  USER_CREATE_TRACK
} from '../../../../../../shared/constants/tracks/tracks'
import {
  ROOT_URLS,
  ANNOUNCEMENT_CREATE_URLS,
  USER_CREATE_URLS
} from '../../../../../../shared/constants/routes/urls'
import {
  ROOT_TITLES,
  ANNOUNCEMENT_CREATE_TITLES,
  USER_CREATE_TITLES
} from '../../../../../../shared/constants/routes/titles'

export function titleManager() {
  const {
    resetAnnouncementIndexControl,
    resetAnnouncementIndexInputs,
    changeAnnouncementIndexControl
  } = this.props

  const title = this.languageObjectHandler(ROOT_TITLES)

  return {
    classNames: { container: '' },
    href: this.languageObjectHandler(ROOT_URLS),
    hrefLang: this.languageObjectHandler(LANGS),
    title,
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
      this.changeRoute(ROOT_TRACK)
      // resetAnnouncementIndexControl()
      // resetAnnouncementIndexInputs()
      // changeAnnouncementIndexControl({ fetch: true })
    }
  }
}

export function addAnnouncementManager() {
  const title = this.languageObjectHandler(ANNOUNCEMENT_CREATE_TITLES)

  return {
    classNames: { container: 'header-link add-announcement' },
    href: `${CLIENT_URL}/${this.languageObjectHandler(ANNOUNCEMENT_CREATE_URLS)}`,
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title,
    label: title,
    onClick: () => this.changeRoute(ANNOUNCEMENT_CREATE_TRACK)
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

  return {
    classNames: { container: 'button language' },
    href: this.matchPathToLanguage(),
    label: this.languageHandler('English', 'Polski'),
    onClick: () => {
      const newLanguage = language === 'pl' ? 'en' : 'pl'

      saveCookie('lang', newLanguage, 'oneYear')
      changeApp({ language: newLanguage, shouldMatchRouteToRender: true })
    }
  }
}
