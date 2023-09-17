import React from 'react'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'
import { shareOnFacebook } from '../../../../../functions/share-on-facebook'
import { buildUrl } from '../../../../../../../../shared/functions/builders/url'

export function shareOnFacebookManager() {
  const { isMobile, announcement } = this.props
  if (!announcement) return null

  const { path } = announcement
  const href = buildUrl({ path })

  return {
    classNames: { input: 'action-button share-on-facebook' },
    href: `https://www.facebook.com/sharer/sharer.php?u=${href}`,
    label: (
      <>
        <SVG name='facebook' />
        {{ pl: "Udostępnij na Facebook'u", en: 'Share on Facebook' }['pl']}
      </>
    ),
    onClick: () => shareOnFacebook(href, isMobile),
  }
}
