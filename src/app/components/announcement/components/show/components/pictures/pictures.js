import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageHandler } from '../../../../../../functions/language-handler'
import { fetchPicture } from './functions/fetch-picture'
import { changePicture } from './functions/change-picture'

class AnnouncementShowPictures extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.fetchPicture = fetchPicture.bind(this)
    this.changePicture = changePicture.bind(this)
  }
  
  render() {
    if (!this.props.pictures) return null
    return (
      <div id='announcement-show-pictures'>
        <div
        style={{
          backgroundImage: `url('${this.props.pictures[this.props.pictureIndex] &&
                                   this.props.pictures[this.props.pictureIndex].url}')`
        }}
        className='pictures'>
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
            <i className='far fa-image' /> {this.props.pictureIndex + 1} / {this.props.pictures.length}
          </div>
        </div>        
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementShowPictures)
