import React from 'react'
import SVG from '../../../../../../support/components/svg/svg'
import { buildLink } from '../../../../../functions/build-link.js'
import { shareOnFacebook } from '../../../../../functions/share-on-facebook.js'

export function shareOnFacebookManager() {
  const { isMobile, lang, announcement } = this.props
  if (!announcement) return null

  const { id, category, district} = announcement
  const href = buildLink({ lang, id, category, district })

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

export function goToAnnouncementManager() {
  const { changeRoute } = this.context
  const href = buildLink(this.props)

  return {
    classNames: { container: 'go-to-announcement' },
    href,
    label: this.langHandler({ pl: 'Pokaż dodane ogłoszenie', en: 'Show the added announcement' }),
    onClick: () => {
      changeRoute({ href })
    }
  }
}
