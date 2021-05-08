import React from 'react'
import { LANGS } from '../../../../../../shared/constants/langs/langs'
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
  ANNOUNCEMENT_CREATE_LABELS
} from '../../../../../../shared/constants/routes/labels'
import CLIENT_URL from '../../../../../../shared/constants/urls/client.js'
import SVG from '../../../../support/components/svg/svg.js'
import getRouteByLang from '../../../../../../../shared/app/functions/routes/getters/route-by-lang.js'

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
        <SVG name='plusSquare' />
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
    classNames: { container: 'header-link sign-in' },
    href,
    hrefLang: this.langHandler(LANGS),
    title,
    label: (
      <>
        <SVG name='userPlus' />
        {title}
      </>
    ),
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
    label: (
      <>
        <SVG name='userCheck' />
        {title}
      </>
    ),
    onClick: () => changeRoute({ href })
  }
}

export function myAccountManager() {
  const { changeRender } = this.props
  const title = this.langHandler(USER_SHOW_TITLES)
  
  return {
    classNames: { container: 'header-link my-account' },
    href: `${CLIENT_URL}/${this.langHandler(USER_SHOW_URLS)}`,
    hrefLang: this.langHandler(LANGS),
    title,
    label: (
      <>
        <SVG name='user' />
        {title}
      </>
    ),
    onClick: () => changeRender({
      [USER_TRACK]: true,
      [USER_SHOW_TRACK]: true
    })
  }
}

export function langManager(props) {
  const { routes, clientUrl, render, lang, pageShowData, changeRoute } = props
  const invertedLanguage = lang === 'pl' ? 'en' : 'pl'
  const { url } = getRouteByLang({ routes, render, lang: invertedLanguage, pageShowData })
  const href = `${clientUrl}/${url === '/' ? '' : `${url}`}`

  return {
    classNames: { container: 'header-link lang' },
    href,
    label: (
      <>
        <SVG name='globe' />
        {{ en: 'Polski', pl: 'English' }[lang]}
      </>
    ),
    onClick: () => {      
      const href = `${clientUrl}/${url}${window.location.search}`

      changeRoute({ href, withoutScroll: true })
    }
  }
}
