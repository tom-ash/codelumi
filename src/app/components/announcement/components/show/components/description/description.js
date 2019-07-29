import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../../../functions/language-handler'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import './styles/styles.scss'

class AnnouncementShowDescription extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
  }
  
  render() {
    return (
      <div id='announcement-show-description'>
        <h3><i className='fas fa-check-circle' /> {this.languageHandler('Opis', 'Description')}</h3>
        <div className='description'>
          {this.languageHandler(this.props.descriptionPolish, this.props.descriptionEnglish)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementShowDescription)