import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { useStore } from 'react-redux'
import { changeUrl } from '../../../../../../../shared/app/functions/routes/changers/route-generic'

interface LinkProps {
  track: string
}

export const Link = (props: LinkProps) => {
  const { links } = useStore().getState()
  const { track } = props
  const link = links[track]

  if (!link) return <></>

  if (typeof window !== 'undefined') {
    // TODO: Investigate better solution.
    // @ts-ignore
    window.areListingsObsolete = true
  }

  const classNames = { container: 'link' }
  const { href, hrefLang, title, label } = link
  const onClick = () => changeUrl({ href })
  const linkProps = { classNames, href, hrefLang, title, label, onClick }

  return <ManagedLink {...linkProps} />
}
