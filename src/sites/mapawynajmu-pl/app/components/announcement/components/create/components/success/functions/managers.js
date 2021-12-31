import React from 'react'
import SVG from '../../../../../../support/components/svg/svg'
import { shareOnFacebook } from '../../../../../functions/share-on-facebook.js'
import buildUrl from '../../../../../../../../shared/functions/builders/url.js'

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
        <div className='text'>
          {this.langHandler({ pl: 'Udostępnij na Facebook\'u', en: 'Share on Facebook' })}
        </div>
      </>
    ),
    onClick: () => shareOnFacebook(href, isMobile)
  }
}
