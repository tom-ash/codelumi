import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { Logo } from './logo/logo'

interface LogoProps {
  links: object[]
  lang: string
  changeRoute: ChangeRoute
  buildUrl: BuildUrl
}

export const LogoLink = (props: LogoProps) => {
  const { links, lang, changeRoute, buildUrl } = props
  const classNames = { container: 'header-link logo' }
  // @ts-ignore
  const link = links['root']
  const title = link && link.title
  const href = link && buildUrl({ path: link.path })
  const hrefLang = lang
  const label = <Logo />
  const onClick = () => {
    window.areListingsObsolete = true
    changeRoute({ href })
  }

  const linkProps = { classNames, href, hrefLang, title, label, onClick }

  return <ManagedLink {...linkProps} />
}
