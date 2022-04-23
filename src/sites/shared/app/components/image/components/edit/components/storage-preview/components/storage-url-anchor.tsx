import React from 'react'
import { ManagedLink } from 'managed-inputs'

interface StorageUrlAnchorProps {
  storageUrl: string
}

export function StorageUrlAnchor(props: StorageUrlAnchorProps) {
  const { storageUrl } = props
  const classNames = {}
  const href = storageUrl
  const label = storageUrl
  const target = '_blank'
  const anchorProps = { classNames, href, label, target }

  return <ManagedLink {...anchorProps} />
}

export default StorageUrlAnchor
