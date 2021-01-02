import React from 'react'
import { languageObjectHandler } from '../../../../../../../../functions/language-handler'

class AnnouncementShowDescription extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }
  
  render() {
    const {
      polishDescription,
      englishDescription
    } = this.props

    return (
      <div className='announcement-show-tile-description'>
        <div className='description'>
          {this.languageObjectHandler({ pl: polishDescription, en: englishDescription })}
        </div>
      </div>
    )
  }
}

export default AnnouncementShowDescription