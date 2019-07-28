import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageHandler } from '../../../../../../functions/language-handler'
import { fetchPicture } from './functions/fetch-picture'
import { changePicture } from './functions/change-picture'
import { parseCurrency } from '../../../../functions/currency-parsers'
import { parseDistrict } from '../../../../functions/district-parsers'
import { getCategoryIcon } from './functions/get-category-icon'
import { getPicture } from './functions/get-picture'
import { closeTile } from './functions/close-tile'
import { deepCopyAnnouncement } from './functions/deep-copy-announcement'
import { showAnnouncement } from './functions/show-announcement'
import { changeRoute } from '../../../../../../functions/routers'
import { phoneSwitchProvider } from '../../../../functions/phone-switch-provider'

class AnnouncementIndexTile extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.fetchPicture = fetchPicture.bind(this)
    this.changePicture = changePicture.bind(this)
    this.getPicture = getPicture.bind(this)
    this.closeTile = closeTile.bind(this)
    this.deepCopyAnnouncement = deepCopyAnnouncement.bind(this)
    this.showAnnouncement = showAnnouncement.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.phoneSwitchProvider = phoneSwitchProvider.bind(this)
    this.rentCurrency = parseCurrency(this.props.announcement.rent_currency)
    this.rentGross = this.props.announcement.rent_amount * 1.23
  }
  
  render() {
    return (
      <div
      className={`announcement-index-tile${this.props.index % 2 === 0 ? ' even' : ''}`}>
                {
        this.props.venue == 'map' &&
        <i
        className='fas fa-times close'
        onClick={this.closeTile}/>
        }
        <div className='tile-container'>
          <div className='data'>
            <div className='rent'>
              <div>
                <i className='fas fa-coins'/> {this.props.announcement.rent_amount} {this.rentCurrency} {this.languageHandler('netto', 'net')} / {this.languageHandler('miesiąc', 'month')}
              </div>
              <div className='gross'>
                {this.rentGross} {this.rentCurrency} {this.languageHandler('brutto', 'gross')} / {this.languageHandler('miesiąc', 'month')}
              </div>
            </div>
            <div className='float-clear' />
          </div>
          <div className='picture-container'>
            <div
            style={{ backgroundImage: this.getPicture() }}
            onClick={() => this.showAnnouncement()}
            className='picture'>
              <div className='announcement-id'>
                {this.props.announcement.id}
              </div>
              <div className={`category ${this.props.announcement.category == '0' ? 'office' : 'usable-premises'}`}>
                {getCategoryIcon(this.props.announcement.category)}
              </div>
              <div
              className='arrow left'
              onClick={(e) => this.changePicture(e, 'previous')}>
              <i className='fas fa-chevron-left' />
              </div>
              <div
              className='arrow right'
              onClick={(e) => this.changePicture(e, 'next')}>
              <i className='fas fa-chevron-right' />
              </div>
              {this.phoneSwitchProvider()}
              <div className='district'>
                <i className='fas fa-city' /> {parseDistrict(this.props.announcement.district)}
              </div> 
            </div>
          </div>
          <div className='bottom-data'>
            <div className='area'>
              <i className='fas fa-layer-group' /> {this.props.announcement.area} {this.languageHandler('m2', 'sqm')}
            </div>
            <div className='rooms'>
              <i className='fas fa-door-closed'/> {this.props.announcement.rooms}
            </div>
            <div className='floor'>
              <i className='fas fa-building'/> {this.props.announcement.floor} {this.languageHandler('z ', 'of ')}
              {this.props.announcement.total_floors}
            </div>
            <div className='calendar'>
              <i className='fas fa-calendar-alt'/> {this.props.announcement.availability_date}
            </div>
            <div className='float-clear' />
          </div>
        </div>
        {this.props.control}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexTile)