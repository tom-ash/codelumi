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
  USER_TRACK,
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
  const { changeUrl } = this.context
  const {
    renderMap,
    renderCatalogue,
    resetAnnouncementIndexControl,
    resetAnnouncementIndexInputs,
    resetAnnouncementIndexData
  } = this.props

  const title = this.langObjHandler(ROOT_TITLES)
  const href = this.langObjHandler(ROOT_URLS)

  return {
    classNames: { container: '' },
    href,
    hrefLang: this.langObjHandler(LANGS),
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
      if (renderMap && !renderCatalogue) return
      if (renderCatalogue) return changeUrl({ href })

      resetAnnouncementIndexControl()
      resetAnnouncementIndexInputs()
      resetAnnouncementIndexData()
      changeUrl({ href })
    }
  }
}

export function addAnnouncementManager() {
  const { changeUrl } = this.context
  const href = `${CLIENT_URL}/${this.langObjHandler(ANNOUNCEMENT_CREATE_URLS)}`

  return {
    classNames: { container: 'header-link add-announcement' },
    href,
    hrefLang: this.langObjHandler(LANGS),
    title: this.langObjHandler(ANNOUNCEMENT_CREATE_TITLES),
    label: this.langObjHandler(ANNOUNCEMENT_CREATE_LABELS),
    onClick: () => changeUrl({ href })
  }
}

export function signUpManager() {
  const { changeUrl } = this.context
  const title = this.langObjHandler(USER_CREATE_TITLES)
  const href = `${CLIENT_URL}/${this.langObjHandler(USER_CREATE_URLS)}`

  return {
    classNames: { container: 'header-link' },
    href,
    hrefLang: this.langObjHandler(LANGS),
    title,
    label: title,
    onClick: () => changeUrl({ href })
  }
}

export function signInManager() {
  const { changeUrl } = this.context
  const title = this.langObjHandler(USER_AUTHORIZE_TITLES)
  const href = `${CLIENT_URL}/${this.langObjHandler(USER_AUTHORIZE_URLS)}`

  return {
    classNames: { container: 'header-link sign-in' },
    href,
    hrefLang: this.langObjHandler(LANGS),
    title,
    label: title,
    onClick: () => changeUrl({ href })
  }
}

export function myAccountManager() {
  const { changeRender } = this.props
  const title = this.langObjHandler(USER_SHOW_TITLES)
  
  return {
    classNames: { container: 'header-link' },
    href: `${CLIENT_URL}/${this.langObjHandler(USER_SHOW_URLS)}`,
    hrefLang: this.langObjHandler(LANGS),
    title,
    label: title,
    onClick: () => changeRender({
      [USER_TRACK]: true,
      [USER_SHOW_TRACK]: true
    })
  }
}

export function languageManager() {
  const { changeUrl, matchPathToLanguage } = this.context
  const { changeApp, lang, pageLangUrls } = this.props
  const invertedLanguage = lang === 'pl' ? 'en' : 'pl'
  const { route, url } = matchPathToLanguage()
  const href = `${CLIENT_URL}/${url === '/' ? '' : `${url}`}`
  
  return {
    classNames: { container: 'button lang' },
    href,
    label: LANG_LABELS[invertedLanguage],
    onClick: () => {
      saveCookie('lang', invertedLanguage, 'oneYear')
      changeApp({ lang: invertedLanguage })

      const href = route ? `${CLIENT_URL}/${url}` : `${CLIENT_URL}/${pageLangUrls[invertedLanguage]}`

      changeUrl({ href, withoutScroll: true })
    }
  }
}
