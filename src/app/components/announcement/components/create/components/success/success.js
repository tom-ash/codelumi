import React from 'react'
import { buildLink } from '../../../../functions/build-link'
import { ManagedLink } from 'managed-inputs'
import * as managers from './functions/managers'
import { shareOnFacebook } from '../../../../functions/share-on-facebook'
import ScalableVectorGraphic from '../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

class AnnouncementCreateSuccess extends React.Component {
  constructor(props) {
    super(props)
    this.goToAnnouncementManager = managers.goToAnnouncementManager.bind(this)
  }

  render() {
    const {
      languageObjectHandler,
      isMobile,
      scalableVectorGraphics
    } = this.props

    return (
      <div className='success-container'>
        <div className='input-explanation'>
          {languageObjectHandler({
            pl: 'Ogłoszenie zostało dodane.',
            en: 'The Announcement has been added.'
          })}
        </div>
        <div className='separation-line' />
        <div className='reach-more'>
          {languageObjectHandler({
            pl: 'Dotrzyj do większego grona odbiorców.',
            en: 'Reach more recipients.'
          })}
        </div>
        <div
          className='share-on-facebook'
          onClick={() => shareOnFacebook(buildLink(this.props), isMobile)}
        >
          <div className='button'>
            <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.facebook} />
          </div>
          <div className='text'>
            {languageObjectHandler({
              pl: 'Udostępnij na Facebook\'u',
              en: 'Share on Facebook'
            })}
          </div>
        </div>
        <ManagedLink {...this.goToAnnouncementManager()} />
      </div>
    )
  }
}

export default AnnouncementCreateSuccess
