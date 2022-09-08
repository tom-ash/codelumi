import React from 'react'
import langHandler from '../../../../../../../functions/lang-handler'
// import Header from '../../../../../../support/components/header/header.js'
// import { HEADER } from './constants/texts.js'

class AnnouncementShowDescription extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }
  
  render() {
    const { description } = this.props

    return (
      <div className='announcement-tile-description'>
        <div className='description'>
          {description}
        </div>
      </div>
    )
  }
}

export default AnnouncementShowDescription