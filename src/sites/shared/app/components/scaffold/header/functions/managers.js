import React from 'react'
import { changeUrl } from '../../../../functions/routes/changers/change-url'

export function logoManager(props) {
  const { links, lang, Logo, buildUrl } = props
  const classNames = { container: 'header-link logo' }
  const link = links['root']
  const title = link && link.title
  const href = link && buildUrl({ path: link.path })
  const hrefLang = lang
  const label = <Logo />
  const onClick = () => {
    window.areListingsObsolete = true
    changeUrl({ href })
  }

  return { classNames, href, hrefLang, title, label, onClick }
}
