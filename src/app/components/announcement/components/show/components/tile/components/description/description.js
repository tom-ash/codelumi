import React from 'react'
import { langObjHandler } from '../../../../../../../../functions/lang-handler'

class AnnouncementShowDescription extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler.bind(this)
  }
  
  render() {
    const {
      polishDescription,
      englishDescription
    } = this.props

    return (
      <div className='announcement-show-tile-description'>
        <div className='description'>
          {this.langObjHandler({ pl: polishDescription, en: englishDescription })}
        </div>
      </div>
    )
  }
}

export default AnnouncementShowDescription