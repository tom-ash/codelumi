import React from 'react'
import { buildLink } from '../../../../functions/build-link'
import { ManagedLink } from 'managed-inputs'
import * as managers from './functions/managers'
import { shareOnFacebook } from '../../../../functions/share-on-facebook'
import SVG from '../../../../../support/components/svg/svg'
import AppContext from '../../../../../../constants/context.js'

class AnnouncementCreateSuccess extends React.Component {
  constructor(props) {
    super(props)
    this.goToAnnouncementManager = managers.goToAnnouncementManager.bind(this)
  }

  static contextType = AppContext

  render() {
    const {
      langHandler,
      isMobile
    } = this.props

    return (
      <div className='success-container'>
        <div className='input-explanation'>
          {langHandler({
            pl: 'Ogłoszenie zostało dodane.',
            en: 'The Announcement has been added.'
          })}
        </div>
        <div className='separation-line' />
        <div className='reach-more'>
          {langHandler({
            pl: 'Dotrzyj do większego grona odbiorców.',
            en: 'Reach more recipients.'
          })}
        </div>
        <div
          className='share-on-facebook'
          onClick={() => shareOnFacebook(buildLink(this.props), isMobile)}
        >
          <div className='button'>
            <SVG name='facebook' />
          </div>
          <div className='text'>
            {langHandler({
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
