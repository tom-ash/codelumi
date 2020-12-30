import React from 'react'
import { saveCookie } from '../../../../../functions/cookie-handlers'
import Logo from '../../../../../assets/logo-header.svg'
import {
  LANGS
} from '../../../../../../shared/constants/langs/langs'
import {
  ROOT_TRACK,
  ANNOUNCEMENT_CREATE_TRACK,
  USER_CREATE_TRACK,
  USER_AUTHORIZE_TRACK,
  USER_SHOW_TRACK
} from '../../../../../../shared/constants/tracks/tracks'
import {
  ROOT_URLS,
  ANNOUNCEMENT_CREATE_URLS,
  USER_CREATE_URLS,
  USER_AUTHORIZE_URLS,
  USER_SHOW_URLS
} from '../../../../../../shared/constants/routes/urls'
import {
  ROOT_TITLES,
  ANNOUNCEMENT_CREATE_TITLES,
  USER_CREATE_TITLES,
  USER_AUTHORIZE_TITLES,
  USER_SHOW_TITLES
} from '../../../../../../shared/constants/routes/titles'
import {
  ANNOUNCEMENT_CREATE_LABELS, LANG_LABELS
} from '../../../../../../shared/constants/routes/labels'

export function titleManager() {
  const {
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
      // TODO
      // resetAnnouncementIndexInputs()
      // resetAnnouncementIndexControl({ fetch: true })
    }
  }
}

export function addAnnouncementManager() {
  return {
    classNames: { container: 'header-link add-announcement' },
    href: `${CLIENT_URL}/${this.languageObjectHandler(ANNOUNCEMENT_CREATE_URLS)}`,
    hrefLang: this.languageObjectHandler(LANGS),
    title: this.languageObjectHandler(ANNOUNCEMENT_CREATE_TITLES),
    label: this.languageObjectHandler(ANNOUNCEMENT_CREATE_LABELS),
    onClick: () => this.changeRoute(ANNOUNCEMENT_CREATE_TRACK)
  }
}

export function signUpManager() {
  const title = this.languageObjectHandler(USER_CREATE_TITLES)

  return {
    classNames: { container: 'header-link' },
    href: `${CLIENT_URL}/${this.languageObjectHandler(USER_CREATE_URLS)}`,
    hrefLang: this.languageObjectHandler(LANGS),
    title,
    label: title,
    onClick: () => this.changeRoute(USER_CREATE_TRACK)
  }
}

export function signInManager() {
  const title = this.languageObjectHandler(USER_AUTHORIZE_TITLES)

  return {
    classNames: { container: 'header-link sign-in' },
    href: `${CLIENT_URL}/${this.languageObjectHandler(USER_AUTHORIZE_URLS)}`,
    hrefLang: this.languageObjectHandler(LANGS),
    title,
    label: title,
    onClick: () => this.changeRoute(USER_AUTHORIZE_TRACK)
  }
}

export function myAccountManager() {
  const title = this.languageObjectHandler(USER_SHOW_TITLES)
  
  return {
    classNames: { container: 'header-link' },
    href: `${CLIENT_URL}/${this.languageObjectHandler(USER_SHOW_URLS)}`,
    hrefLang: this.languageObjectHandler(LANGS),
    title,
    label: title,
    onClick: () => this.changeRoute(USER_SHOW_TRACK)
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
    label: this.languageObjectHandler(LANG_LABELS),
    onClick: () => {
      const newLanguage = language === 'pl' ? 'en' : 'pl'

      saveCookie('lang', newLanguage, 'oneYear')
      changeApp({ language: newLanguage, shouldMatchRouteToRenderAndLanguage: true })
    }
  }
}
