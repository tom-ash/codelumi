import React from 'react'
import { useData } from '../../../../../../functions/store/use-data'

export const StoragePreview = () => {
  const { storageUrl } = useData()

  if (!storageUrl) return null

  const storageUrlRandomizedQuaryParameter = Math.random()

  return (
    <div className='storage-preview'>
      <img src={storageUrl + `?a=${storageUrlRandomizedQuaryParameter}`} />
    </div>
  )
}

export default StoragePreview
