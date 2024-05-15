import React from 'react'
import { Link } from '../../../../../../../../../shared/app/components/support/link/link'

export const AddPostingLink = () => {
  const linkProps = {
    linkKey: 'listings/new/form',
    customClassNames: 'link',
  }

  return <Link {...linkProps} />
}
