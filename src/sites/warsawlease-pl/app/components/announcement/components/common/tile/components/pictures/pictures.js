import React from 'react'
import ManagedSlider from '../../../../../../support/components/managed-slider/managed-slider'
import { ManagedLink } from 'managed-inputs'
import { getDerivedStateFromProps } from './functions/get-derived-state-from-props'
import { langObjHandler } from '../../../../../../../functions/lang-handler'
import { linkManager } from './functions/managers'
import { buildLink } from '../../../../../functions/build-link'
import { shareOnFacebook } from '../../../../../functions/share-on-facebook'

import ScalableVectorGraphic from '../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

class AnnouncementShowPictures extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler.bind(this)
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

    const Chevron = () => <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.chevron} />

    return (
      <div className='announcement-show-pictures'>
        <ManagedSlider
          pictures={pictures}
          disableSLides={disableSLides}
          heightQuantifier={heightQuantifier}
          chevronLeft={<Chevron />}
          chevronRight={<Chevron />}
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

export default AnnouncementShowPictures
