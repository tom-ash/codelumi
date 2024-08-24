import React from 'react'
import { useLinks } from '../../../functions/store/use-links'
import { Link } from '../link/link'

interface TrackedLinkInterface {
  (props: {
    track: string
    classNames?: string[]
    retainQuery?: boolean
  }): React.ReactElement;
}

export const TrackedLink: TrackedLinkInterface = props => {
  const { track, classNames, retainQuery } = props
  const links = useLinks()
  const link = links[track]

  if (!link) {
    throw new Error('Link track unavailable.'); // TODO: Custom error.
  }

  const {
    href,
    lang,
    label,
    title,
    external,
  } = link

  return (
    <Link
      href={href}
      lang={lang}
      label={label}
      title={title}
      classNames={classNames}
      retainQuery={retainQuery}
      external={external}
    />
  )
}
