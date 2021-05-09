import React from 'react'
import { LANGS } from '../../../../../../shared/constants/langs/langs'
import { USER_TRACK, USER_SHOW_TRACK } from '../../../../../../shared/constants/tracks/tracks'
import { ROOT_URLS, ANNOUNCEMENT_CREATE_FORM_URLS, USER_CREATE_FORM_URLS, USER_AUTHORIZE_URLS, USER_SHOW_URLS } from '../../../../../../shared/constants/routes/urls'
import { ROOT_TITLES, ANNOUNCEMENT_CREATE_TITLES, USER_CREATE_FORM_TITLES, USER_AUTHORIZE_TITLES, USER_SHOW_TITLES } from '../../../../../../shared/constants/routes/titles'
import { ANNOUNCEMENT_CREATE_LABELS } from '../../../../../../shared/constants/routes/labels'
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

export function addAnnouncementManager(props) {
  const { clientUrl, urls, titles, changeRoute, langHandler } = props
  const classNames = { container: 'header-link add-announcement' }
  const href = `${clientUrl}/${langHandler(urls.ANNOUNCEMENT_CREATE_FORM_URLS)}`
  const hrefLang = langHandler(LANGS)
  const title = langHandler(titles.ANNOUNCEMENT_CREATE_TITLES)
  const label = (
    <>
      <SVG name='plusSquare' />
      {langHandler(ANNOUNCEMENT_CREATE_LABELS)}
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function signUpManager(props) {
  const { clientUrl, urls, titles, changeRoute, langHandler } = props
  const classNames = { container: 'header-link sign-in' }
  const href = `${clientUrl}/${langHandler(urls.USER_CREATE_FORM_URLS)}`
  const hrefLang = langHandler(LANGS)
  const title = langHandler(titles.USER_CREATE_FORM_TITLES)
  const label = (
    <>
      <SVG name='userPlus' />
      {title}
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function signInManager(props) {
  const { clientUrl, urls, titles, changeRoute, langHandler } = props
  const classNames = { container: 'header-link sign-in' }
  const href = `${clientUrl}/${langHandler(urls.USER_AUTHORIZE_URLS)}`
  const hrefLang = langHandler(LANGS)
  const title = langHandler(titles.USER_AUTHORIZE_TITLES)
  const label = (
    <>
      <SVG name='userCheck' />
      {title}
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function myAccountManager(props) {
  const { clientUrl, urls, titles, changeRender, langHandler } = props
  const classNames = { container: 'header-link my-account' }
  const href = `${clientUrl}/${langHandler(urls.USER_SHOW_URLS)}`
  const hrefLang = langHandler(LANGS)
  const title = langHandler(titles.USER_SHOW_TITLES)
  const label = (
    <>
      <SVG name='user' />
      {title}
    </>
  )
  const onClick = () => changeRender({ [USER_TRACK]: true, [USER_SHOW_TRACK]: true })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function langManager(props) {
  const { routes, clientUrl, render, lang, urlComposites, changeRoute } = props
  const invertedLanguage = lang === 'pl' ? 'en' : 'pl'
  const { url } = getRouteByLang({ routes, render, lang: invertedLanguage, urlComposites })
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
