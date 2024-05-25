import React from 'react'
import { Link } from '../../../../../../../../../shared/app/components/support/link/link'

export const MyPostings = () => {
  const linkProps = {
    linkKey: 'user/postings/index',
    customClassNames: 'link',
  }

  return <Link {...linkProps} />
}
