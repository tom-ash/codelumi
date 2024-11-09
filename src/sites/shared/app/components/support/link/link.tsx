import React, { useCallback } from 'react'
import { changeUrl } from '../../../functions/routes/changers/change-url'
import { ReactChildren } from '../../../../../mapawynajmu-pl/app/app.d'

// TODO: scrollToFragment

interface LinkInterface {
  (props: {
    href: string
    lang: Lang
    label: React.ReactElement | string
    title: string
    classNames?: string[]
    retainTab?: boolean
    retainQuery?: boolean
    external?: boolean
    children?: ReactChildren
  }): React.ReactElement | null
}

export const Link: LinkInterface = props => {
  const {
    href,
    lang,
    label,
    title,
    classNames: customClassNames,
    retainTab = false,
    retainQuery = false,
    external = false,
    children,
  } = props

  const classNames = ['link']

  if (customClassNames) {
    // https://stackoverflow.com/a/45949156
    classNames.push.apply(classNames, customClassNames)
  }

  const className = classNames.join(' ')

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (!external) {
        e.preventDefault()

        changeUrl({ href, retainQueryParams: retainQuery })
      }
    },
    [external]
  )

  const target = retainTab ? undefined : '_blank'

  return (
    <a
      href={href}
      hrefLang={lang}
      title={title}
      className={className}
      onClick={onClick}
      target={target}
    >
      {children || label}
    </a>
  )
}
