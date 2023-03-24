import React from 'react'
import SVG from '../../../../../../support/components/svg/svg'
import { shareOnFacebook } from '../../../../../functions/share-on-facebook'
import { buildUrl } from '../../../../../../../../shared/functions/builders/url'

export function shareOnFacebookManager() {
  const { isMobile, announcement } = this.props
  if (!announcement) return null

  const { path } = announcement
  const href = buildUrl({ path })

  return {
    classNames: { input: 'share-on-facebook' },
    href: `https://www.facebook.com/sharer/sharer.php?u=${href}`,
    label: (
      <>
        <div className='button'>
          <SVG name='facebook' />
        </div>
        <div className='text'>{{ pl: "Udostępnij na Facebook'u", en: 'Share on Facebook' }['pl']}</div>
      </>
    ),
    onClick: () => shareOnFacebook(href, isMobile),
  }
}
