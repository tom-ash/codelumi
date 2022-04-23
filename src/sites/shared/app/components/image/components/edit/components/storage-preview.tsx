import React from 'react'

interface StoragePreviewProps {
  storageUrl: string,
  storageUrlRandomizedQuaryParameter: string
}

export function StoragePreview(props: StoragePreviewProps) {
  const { storageUrl, storageUrlRandomizedQuaryParameter } = props

  return (
    <div className='storage-preview'>
      <img src={storageUrl + `?a=${storageUrlRandomizedQuaryParameter}`} />
    </div>
  )
}

export default StoragePreview
