import React from 'react'
import { Link } from '../../../../../support/link/link'
import { useTexts } from '../../../../../../functions/store/use-texts'
import { useData } from '../../../../../../functions/store/use-data'

export const StorageUrl = () => {
  const { storageUrlLinkLabel } = useTexts()
  const { storageUrl } = useData()

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
