import React from 'react'
import { Link } from '../../../../../support/link/link'
import { useStore } from '../../../../../../functions/store/useStore'

export const StorageUrl = () => {
  const { state } = useStore()
  const { texts, data } = state
  const { storageUrlLinkLabel } = texts
  const { storageUrl } = data

  const linkProps = {
    label: storageUrl,
    href: storageUrl,
  }

  return (
    <div className='storage-url'>
      <label>{storageUrlLinkLabel}</label>
      <Link {...linkProps} />
    </div>
  )
}
