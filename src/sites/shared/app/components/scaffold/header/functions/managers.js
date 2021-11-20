import React from 'react'

export function logoManager({ titles, urls, clientUrl, lang, Logo, changeRoute, langHandler }) {
  const classNames = { container: 'header-link logo' }
  const title = ''//langHandler(titles.ROOT_TITLES)
  const url = langHandler(urls.ROOT_URLS)
  const href = `${clientUrl}/${url === '/' ? '' : url}`
  const hrefLang = lang
  const label = <Logo />
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
