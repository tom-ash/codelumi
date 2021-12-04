import React from 'react'
import SVG from '../../../../../../../../../../shared/app/components/support/svg/svg.js'
import { ANNOUNCEMENT_CREATE_LABELS } from '../../../../../../../../../shared/constants/routes/labels.js'
import { deauthorizeUser } from '../../../../../../../user/components/authorize/functions/adapters.js'

export function myAnnouncementsManager(props) {
  const { langs, links, changeRoute, langHandler } = props
  const classNames = { container: 'add-announcement' }
  const link = links['announcement/index/user']
  const href = link && link.path
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const label = title
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function accountManager(props) {
  const { langs, links, changeRoute, langHandler } = props
  const classNames = { container: 'add-announcement' }
  const link = links['user/edit']
  const href = link && link.path
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const label = title
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function deAuthorizeManager(props) {
  const { changeRoute, langHandler, dispatch } = props

  return {
    classNames: { container: 'de-authorize' },
    label: langHandler({ pl: 'Wyloguj', en: 'Sign Out' }),
    onClick: () => deauthorizeUser({ dispatch, changeRoute })
  }
}


export function addAnnouncementManager(props) {
  const { isMobile, langs, links, changeRoute, langHandler } = props
  const linkData = links['announcement/create/form']
  const href = linkData && linkData.path
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

  console.log(props)

  const link = links['user/create/form']
  const href = link && link.path
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
  const href = link && link.path
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const label = title
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function myAccountManager(props) {
  const { changeShowMenu, langHandler } = props
  const classNames = { container: 'header-link my-account' }
  const label = langHandler({ pl: 'Moje konto', en: 'My Account' })
  const onClick = () => changeShowMenu(true)

  return { classNames, label, onClick }
}
