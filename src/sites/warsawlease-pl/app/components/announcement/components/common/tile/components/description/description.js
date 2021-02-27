import React from 'react'
import langHandler from '../../../../../../../functions/lang-handler'
import Header from '../../../../../../support/components/header/header.js'
import { HEADER } from './constants/texts.js'

class AnnouncementShowDescription extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }
  
  render() {
    const {
      polishDescription,
      englishDescription
    } = this.props

    return (
      <div className='announcement-tile-description'>
        <Header tier={2} text={this.langHandler(HEADER)} />
        <div className='description'>
          {this.langHandler({ pl: polishDescription, en: englishDescription })}
        </div>
      </div>
    )
  }
}

export default AnnouncementShowDescription