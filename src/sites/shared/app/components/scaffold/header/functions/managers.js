import React from 'react'

export function logoManager(props) {
  const { links, lang, Logo, changeRoute, buildUrl } = props
  const classNames = { container: 'header-link logo' }
  const link = links['root']
  const title = link && link.title
  const href = link && buildUrl({ path: link.path })
  const hrefLang = lang
  const label = <Logo />
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
