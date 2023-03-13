import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { Logo } from './logo/logo'
import { changeUrl } from '../../../../../../shared/app/functions/routes/changers/change-url'

interface LogoProps {
  links: object[]
  lang: string
  buildUrl: BuildUrl
}

export const LogoLink = (props: LogoProps) => {
  const { links, lang, buildUrl } = props
  const classNames = { container: 'header-link logo' }
  // @ts-ignore
  const link = links['root']
  const title = link && link.title
  const href = link && buildUrl({ path: link.path })
  const hrefLang = lang
  const label = <Logo />
  const onClick = () => {
    window.areListingsObsolete = true
    changeUrl({ href })
  }

  const linkProps = { classNames, href, hrefLang, title, label, onClick }

  return <ManagedLink {...linkProps} />
}
