import React, { useContext } from 'react'
import AppContext from '../../../../../constants/context'
import { ManagedLink } from 'managed-inputs'
import { useStore } from 'react-redux'

interface LinkProps {
  track: string
}

export const Link = (props: LinkProps) => {
  const { links } = useStore().getState()
  const { track } = props
  const link = links[track]

  if (!link) return <></>

  const classNames = { container: 'link' }
  const { href, hrefLang, title, label } = link
  const { changeRoute } = useContext(AppContext)
  const onClick = () => changeRoute({ href })
  const linkProps = { classNames, href, hrefLang, title, label, onClick }

  return <ManagedLink {...linkProps} />
}
