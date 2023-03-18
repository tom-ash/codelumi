import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { changeUrl } from '../../../../../../../../../../shared/app/functions/routes/changers/change-url'

interface ArticlesLinkProps {
  buildUrl: BuildUrl
  langHandler: LangHandler
  langs: { pl: 'pl'; en: 'en' }
}

export function ArticlesLink(props: ArticlesLinkProps) {
  const { langs, buildUrl, langHandler } = props

  const classNames = { container: 'header-link' }
  // @ts-ignore
  const href = buildUrl({
    // @ts-ignore
    path: langHandler({
      pl: 'artykuly-o-wynajmie-nieruchomosci',
      en: 'articles-on-real-estate-lease-and-rent-in-Poland',
    }),
  })
  // @ts-ignore
  const hrefLang = langHandler(langs)
  // @ts-ignore
  const title = langHandler({ pl: 'Artykuły', en: 'Articles' })
  const label = title
  const onClick = () => changeUrl({ href })

  const linkProps = {
    classNames,
    href,
    hrefLang,
    title,
    label,
    onClick,
  }

  return <ManagedLink {...linkProps} />
}

export default ArticlesLink
