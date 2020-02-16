import React from 'react'
import { languageObjectHandler } from '../../../../../../../../functions/language-handler'

class AnnouncementShowDescription extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }
  
  render() {
    const {
      descriptionPolish,
      descriptionEnglish
    } = this.props

    return (
      <div id='announcement-show-tile-description'>
        <h3>{this.languageObjectHandler({ pl: 'Opis', en: 'Description' })}</h3>
        <div className='description'>
          {this.languageObjectHandler({ pl: descriptionPolish, en: descriptionEnglish })}
        </div>
      </div>
    )
  }
}

export default AnnouncementShowDescription