import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ManagedLink } from 'managed-inputs'
import { changeUrl } from '../../../functions/routes/changers/change-url'

interface LinkInterface {
  (props: {
    linkKey: string
    label: React.ReactElement | string
    customClassNames?: string
  }): JSX.Element
}

export const Link: LinkInterface = props => {
  const { linkKey, label, customClassNames } = props
  const { state } = useStore()
  const { links } = state
  const link = links[linkKey]
  const containerClassNames = customClassNames ? `${customClassNames} link` : 'link'
  const classNames = { container: containerClassNames }
  const onClick = () => changeUrl({ ...link })
  const linkProps = { classNames, ...link, label, onClick }

  return <ManagedLink {...linkProps} />
}
