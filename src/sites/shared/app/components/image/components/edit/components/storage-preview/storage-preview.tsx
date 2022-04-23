import React from 'react'
import StorageUrlAnchor from './components/storage-url-anchor'
// import { ManagedLink } from 'managed-inputs'

interface StoragePreviewProps {
  storageUrl: string,
  storageUrlRandomizedQuaryParameter: string
}

export function StoragePreview(props: StoragePreviewProps) {
  const { storageUrl, storageUrlRandomizedQuaryParameter } = props
  const storageUrlAnchorProps = { storageUrl }

  return (
    <div className='storage-preview'>
      <img src={storageUrl + `?a=${storageUrlRandomizedQuaryParameter}`} />
      <StorageUrlAnchor {...storageUrlAnchorProps} />
    </div>
  )
}

export default StoragePreview
