import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageObjectHandler } from '../../../../functions/language-handler'
import { phoneSwitchProvider } from '../../functions/phone-switch-provider'
import { togglePhone } from '../../functions/toggle-phone'
import { fixedPhoneHandler } from './functions/fixed-phone-handler'
import { changePath } from '../../../../functions/routers/change-path'
import { viewAnnouncement } from '../../functions/view-announcement'
import { parseCategory } from '../../functions/category-parsers'
import AnnouncementTile from './components/tile/tile'

class AnnouncementShow extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.phoneSwitchProvider = phoneSwitchProvider.bind(this)
    this.togglePhone = togglePhone.bind(this)
    this.fixedPhoneHandler = fixedPhoneHandler.bind(this)
    this.changePath = changePath.bind(this)
    this.viewAnnouncement = viewAnnouncement.bind(this)
    this.parseCategory = parseCategory.bind(this)
    this.state = {
      phone: null
    }
  }

  render() {
    const {
      language,
      venue,
      id,
      category,
      district,
      area,
      pictures,
      pictureIndex,
      rentCurrency,
      netRentAmount,
      netRentAmountPerSqm,
      grossRentAmount,
      grossRentAmountPerSqm,
      rooms,
      floor,
      totalFloors,
      availabilityDate,
      features,
      furnishings,
      mapLatitude,
      mapLongitude,
      descriptionPolish,
      descriptionEnglish
    } = this.props

    const { phone } = this.state

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
              <u onClick={(e) => this.togglePhone(e, venue)}>{this.languageObjectHandler({ pl: 'Pokaż', en: 'Show' })}</u>}
            </div>
            <div className='float-clear' />
          </div>
          <div className='contact'>
            {this.phoneSwitchProvider()}
          </div>
        </div>
        <AnnouncementTile
          venue='show'
          language={language}
          id={id}
          category={category}
          district={district}
          area={area}
          pictures={pictures}
          pictureIndex={pictureIndex}
          rentCurrency={rentCurrency}
          netRentAmount={netRentAmount}
          netRentAmountPerSqm={netRentAmountPerSqm}
          grossRentAmount={grossRentAmount}
          grossRentAmountPerSqm={grossRentAmountPerSqm}
          rooms={rooms}
          floor={floor}
          totalFloors={totalFloors}
          availabilityDate={availabilityDate}
          features={features}
          furnishings={furnishings}
          mapLatitude={mapLatitude}
          mapLongitude={mapLongitude}
          descriptionPolish={descriptionPolish}
          descriptionEnglish={descriptionEnglish}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementShow)
