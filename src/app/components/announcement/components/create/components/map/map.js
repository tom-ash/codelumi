import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { validateMap } from './functions/validate-map'
import './styles/styles.scss'
import * as lifecycle from './functions/lifecycle'
import { googleMapHandler } from '../../../../functions/google-map-handler'

class AnnouncementCreatMap extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.validateMap = validateMap.bind(this)
    this.googleMapHandler = googleMapHandler.bind(this)
  }

  render() {
    return (
      <div id='announcement-create-map' className='section'>
        <div id='google-map-container' className='map'>
          <div id='google-map' className={this.props.error.pl ? 'map-error' : ''}/>
        </div>
        <div className='error'>
          {this.languageObjectHandler(this.props.error)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatMap)