import React from 'react'
import SVG from '../../../../../../../../../../shared/app/components/support/svg/svg.js'
import { ANNOUNCEMENT_CREATE_LABELS } from '../../../../../../../../../shared/constants/routes/labels.js'

export function addAnnouncementManager(props) {
  const { isMobile, langs, links, changeRoute, langHandler } = props
  const linkData = links['announcement/create']
  const href = linkData && linkData.url
  const hrefLang = langHandler(langs)
  const title = linkData && linkData.title
  const classNames = { container: 'header-link add-announcement' }
  const label = (
    <>
      {!isMobile && <SVG name='plus' />}
      {langHandler(isMobile ? { pl: 'Dodaj ogłoszenie (bezpłatnie)', en: 'Add Announcement (Free)'} : ANNOUNCEMENT_CREATE_LABELS)}
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function signUpManager(props) {
  const { clientUrl, urls, langs, titles, changeRoute, langHandler } = props
  const classNames = { container: 'header-link sign-up' }
  const href = `${clientUrl}/${langHandler(urls.USER_CREATE_FORM_URLS)}`
  const hrefLang = langHandler(langs)
  const title = langHandler(titles.USER_CREATE_FORM_TITLES)
  const label = title
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function signInManager(props) {
  const { clientUrl, urls, langs, titles, changeRoute, langHandler } = props
  const classNames = { container: 'header-link sign-in' }
  const href = `${clientUrl}/${langHandler(urls.USER_AUTHORIZE_URLS)}`
  const hrefLang = langHandler(langs)
  const title = langHandler(titles.USER_AUTHORIZE_TITLES)
  const label = title
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function myAccountManager(props) {
  const { clientUrl, tracks, urls, langs, titles, changeRender, langHandler } = props
  const classNames = { container: 'header-link my-account' }
  const href = `${clientUrl}/${langHandler(urls.USER_SHOW_URLS)}`
  const hrefLang = langHandler(langs)
  const title = langHandler(titles.USER_SHOW_TITLES)
  const label = title
  const onClick = () => changeRender({ [tracks.USER_TRACK]: true, [tracks.USER_SHOW_TRACK]: true })

  return { classNames, href, hrefLang, title, label, onClick }
}
