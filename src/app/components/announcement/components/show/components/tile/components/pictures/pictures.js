import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from './constants/mappers'
import ManagedSlider from '../../../../../../../support/components/managed-slider/managed-slider'
import { ManagedLink } from 'managed-inputs'
import { getDerivedStateFromProps } from './functions/get-derived-state-from-props'
import { languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { linkManager } from './functions/managers'
import { buildLink } from '../../../../../../functions/build-link'
import { shareOnFacebook } from '../../../../../../functions/share-on-facebook'

import ScalableVectorGraphic from '../../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

class AnnouncementShowPictures extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.linkManager = linkManager.bind(this)
    this.state = {
      pictures: []
    }
  }

  static getDerivedStateFromProps = getDerivedStateFromProps

  render() {
    const {
      disableSLides,
      heightQuantifier,
      venue,
      isMobile,
      scalableVectorGraphics
    } = this.props

    const {
      pictures
    } = this.state

    if (pictures.length === 0 && venue === 'show') return null
    if (pictures.length === 0) return <ManagedLink {...this.linkManager()} />

    return (
      <div className='announcement-show-pictures'>
        <ManagedSlider
          pictures={pictures}
          disableSLides={disableSLides}
          heightQuantifier={heightQuantifier}
        />
        {venue !== 'mini-list' &&
        <div
          className='share-on-facebook-button show'
          onClick={() => shareOnFacebook(buildLink(this.props), isMobile)}
        >
          <ScalableVectorGraphic
            pathData={scalableVectorGraphics && scalableVectorGraphics.facebook}
            color='#FDFEFE'
          />
        </div>}
        {venue !== 'show' && venue !== 'mini-list' && <ManagedLink {...this.linkManager()} />}
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(AnnouncementShowPictures)
