import React from 'react'
import { ManagedLink } from 'managed-inputs'

interface StorageUrlAnchorProps {
  storageUrl: string
}

function StorageUrlAnchor(props: StorageUrlAnchorProps) {
  const { storageUrl } = props
  const classNames = {}
  const href = storageUrl
  const label = storageUrl
  const target = '_blank'
  const anchorProps = { classNames, href, label, target }

  return <ManagedLink {...anchorProps} />
}

interface StorageUrlProps {
  storageUrl: string
}

const StorageUrl = (props: StorageUrlProps) => {
  const { storageUrl } = props

  const storageUrlAnchorProps = { storageUrl }

  return (
    <div className='storage-url'>
      <label>
        Storage Url
      </label>
      <StorageUrlAnchor {...storageUrlAnchorProps} />
    </div>
  )
}

export default StorageUrl
