import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementShowPictures from './components/pictures/pictures'
import AnnouncementShowPrimary from './components/primary/primary'
import AnnouncementShowMap from './components/map/map'
import * as lifecycle from './functions/lifecycle'
import { parseDistrict } from '../../functions/district-parsers'
import { languageHandler } from '../../../../functions/language-handler'
import AnnouncementShowFeaturesFurnishings from './components/features-furnishings/features-furnishings'
import AnnouncementShowDescription from './components/description/description'
import './styles/styles.scss'
import { phoneSwitchProvider } from '../../functions/phone-switch-provider'

class AnnouncementShow extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.languageHandler = languageHandler.bind(this)
    this.phoneSwitchProvider = phoneSwitchProvider.bind(this)
  }

  render() {
    return (
      <div id='announcement-show'>
        <div className='page-header'>
          Ogłoszenie {this.props.id}
        </div>
        <div className='contact'>
          {this.phoneSwitchProvider()}
          <div
          className='name'>
            {this.props.name}
          </div>
          
          <div className='float-clear'/>
        </div>
        <h3>
          <div className='pin'>
            <i className="fas fa-briefcase"></i>
          </div>
          {parseDistrict(this.props.district)}
        </h3>
        <h4><i className='fas fa-image' /> Zdjęcia</h4>
        <AnnouncementShowPictures />
        <h4><i className='fas fa-info-circle' /> Informacje podstawowe</h4>
        <AnnouncementShowPrimary />
        {
        this.props.features && this.props.features.length > 0 &&
        <div>
          <h4><i className='fas fa-check-circle' /> Zalety</h4>
          <AnnouncementShowFeaturesFurnishings items='features'/>
        </div>
        }
        {
        this.props.furnishings && this.props.furnishings.length > 0 &&
        <div>
          <h4><i className='fas fa-check-circle' /> Wyposazenie</h4>
          <AnnouncementShowFeaturesFurnishings items='furnishings'/>
        </div>
        }
        {
        (this.props.language == 'polish' && this.props.description && this.props.description.polish.length > 0 ||
         this.props.language != 'polish' && this.props.description && this.props.description.english.length > 0
        ) &&
        <div>
          <h4><i className='fas fa-align-left' /> Opis</h4>
          <AnnouncementShowDescription />
        </div>
        }
        <h4><i className='fas fa-map-marker-alt' /> Mapa</h4>
        <AnnouncementShowMap />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementShow)
