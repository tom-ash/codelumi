import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { fetchPicture } from './functions/fetch-picture'
import { changePicture } from './functions/change-picture'
import { ManagedLink } from 'managed-inputs'
import { linkManager } from './functions/managers'
import PropTypes from 'prop-types';

class AnnouncementShowPictures extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.fetchPicture = fetchPicture.bind(this)
    this.changePicture = changePicture.bind(this)
    this.linkManager = linkManager.bind(this)
    this.state = {
      downloadedPictures: [],
      pictureIndex: 0
    }
  }
  
  render() {
    const {
      downloadedPictures,
      pictureIndex
    } = this.state

    const {
      pictures,
      venue,
      onClick,
      id
    } = this.props

    if (downloadedPictures.length === 0) return null

    return (
      <div
        className='announcement-show-tile-pictures'
        // onClick={() => onClick(id)}
      >
        <div
        style={{
          backgroundImage: `url('${downloadedPictures[pictureIndex]}')`
        }}
        className='pictures'>
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
          </React.Fragment>
          }
          {venue !== 'show' && venue !== 'mini-list' && <ManagedLink {...this.linkManager()} />}
        </div>        
      </div>
    )
  }
}

// AnnouncementShowPictures.defaultProps = {
//   onClick: () => null
// }

export default connect(null, mapDispatchToProps)(AnnouncementShowPictures)
