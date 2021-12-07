import React from 'react'

export function logoManager({ links, lang, Logo, changeRoute }) {
  const classNames = { container: 'header-link logo' }
  const link = links['root']
  const title = link && link.title
  const href = link && link.path
  const hrefLang = lang
  const label = <Logo />

  // TODO CHANGE ROUTE
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
