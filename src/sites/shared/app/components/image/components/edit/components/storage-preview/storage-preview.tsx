import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'

export const StoragePreview = () => {
  const { state } = useStore()
  const { data } = state
  const { storageUrl } = data

  if (!storageUrl) return null

  const storageUrlRandomizedQuaryParameter = Math.random()

  return (
    <div className='storage-preview'>
      <img src={storageUrl + `?a=${storageUrlRandomizedQuaryParameter}`} />
    </div>
  )
}

export default StoragePreview
