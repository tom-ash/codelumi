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
import { phoneSwitchProvider } from '../../functions/phone-switch-provider'
import { togglePhone } from '../../functions/toggle-phone'
import { fixedPhoneHandler } from './functions/fixed-phone-handler'
import { changeRoute } from '../../../../functions/routers'
import { viewAnnouncement } from '../../functions/view-announcement'
import DataTile from '../index/components/tile/components/data-tile/data-tile'

class AnnouncementShow extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.languageHandler = languageHandler.bind(this)
    this.phoneSwitchProvider = phoneSwitchProvider.bind(this)
    this.togglePhone = togglePhone.bind(this)
    this.fixedPhoneHandler = fixedPhoneHandler.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.viewAnnouncement = viewAnnouncement.bind(this)
  }

  render() {
    const { phone, venue, category, features, furnishings, descriptionPolish, descriptionEnglish, id, district } = this.props
    return (
      <div id='announcement-show'>
        <div id='showcase' className='small-shadow'>
          <div className='name'>
            {this.props.name}
          </div>
          <div className='phone-showcase'>
            <div className='icon'>
              <i className='fas fa-phone' />
            </div>
            <div className='text'>
              {` ${phone}`}
              {phone && phone.length < 9 &&
              <u onClick={(e) => this.togglePhone(e, venue)}>{this.languageHandler('Pokaż', 'Show')}</u>}
            </div>
            <div className='float-clear' />
          </div>
          <div className='contact'>
            {this.phoneSwitchProvider()}
          </div>
        </div>
        <div className='announcement small-shadow'>
          <div className='headers'>
            <h2 className='page-header'>
            </h2>
          </div>
          <div className='left-container category'>
            <DataTile classNames='area' icon='far fa-list-alt'
            value={(
              <strong>
                {category === 0 ? this.languageHandler('Biuro', 'Office') : this.languageHandler('Lokal użytkowy', 'Usable Premises')}
              </strong>
            )}
            />
          </div>
          <div className='right-container district'>
            <DataTile classNames='district' icon='fas fa-city' value={parseDistrict(district)} />
          </div>
          <div className='float-clear' />
          <AnnouncementShowPictures />
          <AnnouncementShowPrimary />
          {
          features && features.length > 0 &&
          <div>
            <AnnouncementShowFeaturesFurnishings items='features'/>
          </div>
          }
          {
          furnishings && furnishings.length > 0 &&
          <div>
            <AnnouncementShowFeaturesFurnishings items='furnishings'/>
          </div>
          }
          {
          (descriptionPolish || descriptionEnglish) &&
          <AnnouncementShowDescription />
          }
          <AnnouncementShowMap />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementShow)
