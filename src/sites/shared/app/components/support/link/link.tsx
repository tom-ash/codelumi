import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ManagedLink } from 'managed-inputs'
import { changeUrl } from '../../../functions/routes/changers/change-url'

interface LinkInterface {
  (props: {
    label?: React.ReactElement | string
    linkKey?: string
    href?: string
    hrefLang?: Lang
    title?: string
    customClassNames?: string
  }): React.ReactElement | null
}

export const Link: LinkInterface = props => {
  const { label: customLabel, linkKey, href, hrefLang, title, customClassNames } = props
  const { state } = useStore()
  const { links } = state
  const containerClassNames = customClassNames ? `${customClassNames} link` : 'link'
  const classNames = { container: containerClassNames }

  let linkProps

  if (linkKey) {
    const link = links[linkKey]
    if (!link) return null

    const label = customLabel || link.label
    const onClick = () => changeUrl({ ...link })

    linkProps = { ...link, label, classNames, onClick }
  } else {
    const onClick = () => changeUrl({ href })
    linkProps = { href, hrefLang, label: customLabel, title, classNames, onClick }
  }

  return <ManagedLink {...linkProps} />
}
