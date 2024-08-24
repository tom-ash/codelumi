import React from 'react'
import { DeprecatedLink } from '../../../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'

export const AddPostingLink = () => {
  const linkProps = {
    linkKey: 'listings/new/form',
    customClassNames: 'link',
  }

  return <DeprecatedLink {...linkProps} />
}
