import React from 'react'
import SVG from '../../../../../../../../../../shared/app/components/support/svg/svg.js'
import { ANNOUNCEMENT_CREATE_LABELS } from '../../../../../../../../../shared/constants/routes/labels.js'

export function addAnnouncementManager(props) {
  const { clientUrl, urls, langs, titles, changeRoute, langHandler } = props
  const classNames = { container: 'header-link add-announcement' }
  const href = `${clientUrl}/${langHandler(urls.ANNOUNCEMENT_CREATE_FORM_URLS)}`
  const hrefLang = langHandler(langs)
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
  const { clientUrl, urls, langs, titles, changeRoute, langHandler } = props
  const classNames = { container: 'header-link sign-up' }
  const href = `${clientUrl}/${langHandler(urls.USER_CREATE_FORM_URLS)}`
  const hrefLang = langHandler(langs)
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
  const { clientUrl, urls, langs, titles, changeRoute, langHandler } = props
  const classNames = { container: 'header-link sign-in' }
  const href = `${clientUrl}/${langHandler(urls.USER_AUTHORIZE_URLS)}`
  const hrefLang = langHandler(langs)
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
  const { clientUrl, tracks, urls, langs, titles, changeRender, langHandler } = props
  const classNames = { container: 'header-link my-account' }
  const href = `${clientUrl}/${langHandler(urls.USER_SHOW_URLS)}`
  const hrefLang = langHandler(langs)
  const title = langHandler(titles.USER_SHOW_TITLES)
  const label = (
    <>
      <SVG name='user' />
      {title}
    </>
  )
  const onClick = () => changeRender({ [tracks.USER_TRACK]: true, [tracks.USER_SHOW_TRACK]: true })

  return { classNames, href, hrefLang, title, label, onClick }
}
