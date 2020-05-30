import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from './constants/mappers'
import { languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { changePicture } from './functions/change-picture'
import { ManagedLink } from 'managed-inputs'
import { linkManager } from './functions/managers'

class AnnouncementShowPictures extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.changePicture = changePicture.bind(this)
    this.linkManager = linkManager.bind(this)
    this.state = { pictureIndex: 0 }
  }
  
  render() {
    const { pictureIndex } = this.state

    const {
      pictures,
      venue,
      id
    } = this.props

    if (pictures === null || pictures.length === 0 && venue === 'show') return null
    if (pictures.length === 0) return <ManagedLink {...this.linkManager()} />

    return (
      <div className='announcement-show-tile-pictures'>
        <div className='pictures'>
          <img
            src={`${AWS_S3_URL}/announcements/${id}/${pictures[pictureIndex].database}`}
            className='picture'
          />
          {venue !== 'mini-list' &&
          <React.Fragment>
            <div
            className='arrow left'
            onClick={() => this.changePicture('previous')}>
              <i className='fas fa-chevron-left' />
            </div>
            <div
            className='arrow right'
            onClick={() => this.changePicture('next')}>
              <i className='fas fa-chevron-right' />
            </div>
            <div className='counter'>
              <i className='far fa-image' /> {pictureIndex + 1} / {pictures.length}
            </div>
          </React.Fragment>}
          {venue !== 'show' && venue !== 'mini-list' && <ManagedLink {...this.linkManager()} />}
        </div>        
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(AnnouncementShowPictures)
