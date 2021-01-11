import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler, langObjHandler } from '../../../../../../functions/lang-handler'
import { validateMap } from './functions/validate-map'
import * as lifecycle from './functions/lifecycle'
import { googleMapHandler } from '../../../../functions/google-map-handler'
import { HeaderSection } from '../shared/headers/section/section.js'

class AnnouncementCreatMap extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.validateMap = validateMap.bind(this)
    this.googleMapHandler = googleMapHandler.bind(this)
  }

  render() {
    return (
      <div id='announcement-create-map' className='section'>
        <HeaderSection
          textObj={{ pl: 'Lokalizacja', en: 'Location' }}
          required={true}
          langHandler={this.langObjHandler}
        />
        <div className='hint'>
          {this.langObjHandler({
            pl: 'Kliknij lewym przyciskiem na mapie, aby wybrać lokalizację.',
            en: 'Mouse left click on the map to select localisation.'
          })}
        </div>
        <div id='google-map-container' className='map'>
          <div id='google-map' className={this.props.error.pl ? 'map-error' : ''}/>
        </div>
        <div className='error'>
          {this.langObjHandler(this.props.error)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatMap)