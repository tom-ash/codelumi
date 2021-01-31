import React from 'react'
import ManagedSlider from '../../../../../../support/components/managed-slider/managed-slider'
import { ManagedLink } from 'managed-inputs'
import { getDerivedStateFromProps } from './functions/get-derived-state-from-props'
import { langObjHandler } from '../../../../../../../functions/lang-handler'
import { linkManager } from './functions/managers'
import { buildLink } from '../../../../../functions/build-link'
import { shareOnFacebook } from '../../../../../functions/share-on-facebook'

import SVG from '../../../../../../support/components/svg/svg'

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
      svgs
    } = this.props

    const {
      pictures
    } = this.state

    if (pictures.length === 0 && venue === 'show') return null
    if (pictures.length === 0) return <ManagedLink {...this.linkManager()} />

    const Chevron = () => <SVG pathData={svgs && svgs.chevron} />

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
          <SVG
            pathData={svgs && svgs.facebook}
            color='#FDFEFE'
          />
        </div>}
        {venue !== 'show' && venue !== 'mini-list' && <ManagedLink {...this.linkManager()} />}
      </div>
    )
  }
}

export default AnnouncementShowPictures
