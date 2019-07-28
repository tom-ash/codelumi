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
        <div>
          {this.languageHandler(this.props.description.polish, this.props.description.english)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementShowDescription)