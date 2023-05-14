import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ManagedLink } from 'managed-inputs'
import { changeUrl } from '../../../functions/routes/changers/change-url'
import { setScreenOffsetAtElement } from '../../../functions/screen/setters/offset-at-element'

type LinkInterfaceProps = {
  linkKey: string
  href?: string
  hrefLang?: Lang
  label?: React.ReactElement | string
  title?: string
  customClassNames?: string
} | {
  href: string
  hrefLang?: Lang
  label?: React.ReactElement | string
  title?: string
  customClassNames?: string
}

interface LinkInterface {
  (props: LinkInterfaceProps): React.ReactElement | null
}

const scrollToAnchor = (href: string) => {
  const identifier = href.substring(1)

  history.pushState(null, '', `${window.location.pathname}${href}`)

  const section = document.getElementById(identifier)
  const translation = -80

  setScreenOffsetAtElement({ element: section, translation })
}

export const Link: LinkInterface = props => {
  const { label: customLabel, href, hrefLang, title, customClassNames } = props
  const { state } = useStore()
  const { links } = state
  const containerClassNames = customClassNames ? `${customClassNames} link` : 'link'
  const classNames = { container: containerClassNames }

  let linkProps

  if ('linkKey' in props) {
    const linkKey = props.linkKey
    const link = links[linkKey]
    if (!link) return null

    const label = customLabel || link.label
    const external = link.external

    if (external) {
      const { href } = link

      return (
        <a
          href={href}
          target='_blank'
        >
          {label}
        </a>
      )
    }

    const onClick = () => changeUrl({ ...link })

    linkProps = { ...link, label, classNames, onClick }
  } else {
    const isAnchor = href!.match(/^#.+$/)
    const onClick = () => isAnchor ? scrollToAnchor(href!) : changeUrl({ href })

    linkProps = { href, hrefLang, label: customLabel, title, classNames, onClick }
  }

  return <ManagedLink {...linkProps} />
}
