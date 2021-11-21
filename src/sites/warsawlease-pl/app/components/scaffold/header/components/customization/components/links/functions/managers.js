import React from 'react'
import SVG from '../../../../../../../../../../shared/app/components/support/svg/svg.js'
import { ANNOUNCEMENT_CREATE_LABELS } from '../../../../../../../../../shared/constants/routes/labels.js'

export function addAnnouncementManager(props) {
  const { isMobile, langs, links, changeRoute, langHandler } = props
  const linkData = links['announcement/create/form']
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
  const { langs, links, changeRoute, langHandler } = props
  const classNames = { container: 'header-link sign-up' }
  const link = links['user/create/form']
  const href = link && link.url
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const label = title
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function signInManager(props) {
  const { links, langs, changeRoute, langHandler } = props
  const classNames = { container: 'header-link sign-in' }
  const link = links['user/authorize']
  const href = link && link.url
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const label = title
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function myAccountManager(props) {
  const { tracks, links, langs, changeRender, langHandler } = props
  const classNames = { container: 'header-link my-account' }
  const link = links['user/show']
  const href = link && link.url
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const label = title
  const onClick = () => changeRender({ [tracks.USER_TRACK]: true, [tracks.USER_SHOW_TRACK]: true })

  return { classNames, href, hrefLang, title, label, onClick }
}
