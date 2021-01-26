import React from 'react'
import { langObjHandler } from '../../../../../../../functions/lang-handler'
import Header from '../../../../../../support/components/header/header.js'
import { HEADER } from './constants/texts.js'

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
      <div className='announcement-tile-description'>
        <Header tier={2} text={this.langObjHandler(HEADER)} />
        <div className='description'>
          {this.langObjHandler({ pl: polishDescription, en: englishDescription })}
        </div>
      </div>
    )
  }
}

export default AnnouncementShowDescription