import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ManagedLink } from 'managed-inputs'
import { changeUrl } from '../../../functions/routes/changers/change-url'

interface LinkInterface {
  (props: {
    label: React.ReactElement | string
    linkKey?: string
    href?: string
    hrefLang?: Lang
    title?: string
    customClassNames?: string
  }): JSX.Element
}

export const Link: LinkInterface = props => {
  const { label, linkKey, href, hrefLang, title, customClassNames } = props
  const { state } = useStore()
  const { links } = state
  const containerClassNames = customClassNames ? `${customClassNames} link` : 'link'
  const classNames = { container: containerClassNames }

  let linkProps

  if (linkKey) {
    const link = links[linkKey]
    const onClick = () => changeUrl({ ...link })
    linkProps = { ...link, label, classNames, onClick }
  } else {
    const onClick = () => changeUrl({ href })
    linkProps = { href, hrefLang, label, title, classNames, onClick }
  }

  return <ManagedLink {...linkProps} />
}
