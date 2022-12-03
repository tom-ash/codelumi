import React from 'react'
import { ManagedLink } from 'managed-inputs'

interface LogoProps {
  links: object[]
  lang: string
  HtmlLogo: React.FunctionComponent
  changeRoute: ChangeRoute
  buildUrl: BuildUrl
}

export const Logo = (props: LogoProps) => {
  const { links, lang, HtmlLogo, changeRoute, buildUrl } = props
  const classNames = { container: 'header-link logo' }
  // @ts-ignore
  const link = links['root']
  const title = link && link.title
  const href = link && buildUrl({ path: link.path })
  const hrefLang = lang
  const label = <HtmlLogo />
  const onClick = () => {
    window.areListingsObsolete = true
    changeRoute({ href })
  }

  const linkProps = { classNames, href, hrefLang, title, label, onClick }

  return <ManagedLink {...linkProps} />
}
