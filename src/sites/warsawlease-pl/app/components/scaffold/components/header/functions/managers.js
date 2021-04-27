import React from 'react'
import { saveCookie } from '../../../../../functions/cookie-handlers'
import {
  LANGS
} from '../../../../../../shared/constants/langs/langs'
import { USER_TRACK, USER_SHOW_TRACK } from '../../../../../../shared/constants/tracks/tracks'
import {
  ROOT_URLS,
  ANNOUNCEMENT_CREATE_FORM_URLS,
  USER_CREATE_FORM_URLS,
  USER_AUTHORIZE_URLS,
  USER_SHOW_URLS
} from '../../../../../../shared/constants/routes/urls'
import {
  ROOT_TITLES,
  ANNOUNCEMENT_CREATE_TITLES,
  USER_CREATE_FORM_TITLES,
  USER_AUTHORIZE_TITLES,
  USER_SHOW_TITLES
} from '../../../../../../shared/constants/routes/titles'
import {
  ANNOUNCEMENT_CREATE_LABELS, LANG_LABELS
} from '../../../../../../shared/constants/routes/labels'
import routes from '../../../../../../shared/constants/routes/routes.js'
import CLIENT_URL from '../../../../../../shared/constants/urls/client.js'
import SVG from '../../../../support/components/svg/svg.js'

export function titleManager() {
  const { changeRoute } = this.context
  const { renderMap, renderCatalogue, resetAnnouncementIndexControl, resetAnnouncementIndexInputs, resetAnnouncementIndexData } = this.props
  const title = this.langHandler(ROOT_TITLES)
  const href = `${CLIENT_URL}/${this.langHandler(ROOT_URLS)}`

  return {
    classNames: { container: '' },
    href,
    hrefLang: this.langHandler(LANGS),
    title,
    label: (
      <div className='logo'>
        <div>WARSAW</div>
        <div>LEASE</div>
        <div className='float-clear' />
      </div>
    ),
    onClick: () => {
      if (renderMap && !renderCatalogue) return
      if (renderCatalogue) return changeRoute({ href })

      resetAnnouncementIndexControl()
      resetAnnouncementIndexInputs()
      resetAnnouncementIndexData()
      changeRoute({ href })
    }
  }
}

export function addAnnouncementManager() {
  const { changeRoute } = this.context
  const href = `${CLIENT_URL}/${this.langHandler(ANNOUNCEMENT_CREATE_FORM_URLS)}`

  return {
    classNames: { container: 'header-link add-announcement' },
    href,
    hrefLang: this.langHandler(LANGS),
    title: this.langHandler(ANNOUNCEMENT_CREATE_TITLES),
    label: (
      <>
        <SVG name='checkSquare' />
        {this.langHandler(ANNOUNCEMENT_CREATE_LABELS)}
      </>
    ),
    onClick: () => changeRoute({ href })
  }
}

export function signUpManager() {
  const { changeRoute } = this.context
  const title = this.langHandler(USER_CREATE_FORM_TITLES)
  const href = `${CLIENT_URL}/${this.langHandler(USER_CREATE_FORM_URLS)}`

  return {
    classNames: { container: 'header-link' },
    href,
    hrefLang: this.langHandler(LANGS),
    title,
    label: title,
    onClick: () => changeRoute({ href })
  }
}

export function signInManager() {
  const { changeRoute } = this.context
  const title = this.langHandler(USER_AUTHORIZE_TITLES)
  const href = `${CLIENT_URL}/${this.langHandler(USER_AUTHORIZE_URLS)}`

  return {
    classNames: { container: 'header-link sign-in' },
    href,
    hrefLang: this.langHandler(LANGS),
    title,
    label: title,
    onClick: () => changeRoute({ href })
  }
}

export function myAccountManager() {
  const { changeRender } = this.props
  const title = this.langHandler(USER_SHOW_TITLES)
  
  return {
    classNames: { container: 'header-link' },
    href: `${CLIENT_URL}/${this.langHandler(USER_SHOW_URLS)}`,
    hrefLang: this.langHandler(LANGS),
    title,
    label: title,
    onClick: () => changeRender({
      [USER_TRACK]: true,
      [USER_SHOW_TRACK]: true
    })
  }
}

export function languageManager() {
  const { changeRoute, getRouteByLang } = this.context
  const { changeApp, lang } = this.props
  const invertedLanguage = lang === 'pl' ? 'en' : 'pl'
  const { url } = getRouteByLang({ lang: invertedLanguage, routes })
  const href = `${CLIENT_URL}/${url === '/' ? '' : `${url}`}`
  
  return {
    classNames: { container: 'button lang' },
    href,
    label: LANG_LABELS[invertedLanguage],
    onClick: () => {
      saveCookie('lang', invertedLanguage, 'oneYear')
      changeApp({ lang: invertedLanguage })

      const href = `${CLIENT_URL}/${url}`

      changeRoute({ href: href + window.location.search, withoutScroll: true })
    }
  }
}
