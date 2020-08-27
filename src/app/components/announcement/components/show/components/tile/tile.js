import React from 'react'
import AnnouncementShowPictures from './components/pictures/pictures'
import AnnouncementShowPrimary from './components/primary/primary'
import AnnouncementShowFeaturesFurnishings from './components/features-furnishings/features-furnishings'
import AnnouncementShowDescription from './components/description/description'
import AnnouncementShowMap from './components/map/map'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import { parseCategory } from '../../../../functions/category-parsers'
import { parseDistrict } from '../../../../functions/district-parsers'
import { CloseButton } from '../../../../../support/components/close-button/close-button'
import { phoneSwitchProvider } from '../../../../functions/phone-switch-provider'
import { togglePhone } from '../../../../functions/toggle-phone'

class AnnouncementTile extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.parseCategory = parseCategory.bind(this)
    this.phoneSwitchProvider = phoneSwitchProvider.bind(this)
    this.togglePhone = togglePhone.bind(this)
    this.state = {
      phone: null
    }
  }

  render() {
    const {
      language,
      venue,
      showPhoneSwitch,
      id,
      category,
      district,
      area,
      pictures,
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
      descriptionPolish,
      descriptionEnglish,
      control,
      closeButtonOnClick,
      isMobile
    } = this.props

    const venueShow = venue === 'show'

    return (
      <div className={`announcement-show-tile small-shadow ${venue}`}>
        {venue === 'map' &&
        <CloseButton
          onClick={closeButtonOnClick}
        />}
        <div className='header-container'>
          <h2>
            <div className='header-row category'>
              <span>{category !== null && this.parseCategory(category)}</span>
              &nbsp;
              <span className='for-lease'>{this.languageObjectHandler({ pl: 'na wynajem', en: 'for lease' })}</span>
            </div>
            <div className='header-row district'>
              {parseDistrict(district)}{this.languageObjectHandler({ pl: ', Warszawa', en: ', Warsaw' })}
            </div>
            <div className='area'>
              <div className='area-amount'>
              {area}
              </div>
              {this.languageObjectHandler({
                pl: (
                  <React.Fragment>
                    <div className='m'>
                      m
                    </div>
                    <div className='sq'>
                      2
                    </div>
                  </React.Fragment>
                ),
                en: (
                  <div className='m'>
                    sqm
                  </div>
                )
              })}
              <div className='float-clear' />
            </div>
          </h2>
        </div>
        <div className='float-clear' />
        {showPhoneSwitch &&
        this.phoneSwitchProvider()}
        <AnnouncementShowPictures
          language={language}
          venue={venue}
          id={id}
          pictures={pictures}
          category={category}
          district={district}
          area={area}
          isMobile={isMobile}
        />
        <AnnouncementShowPrimary
          language={language}
          category={category}
          netRentAmount={netRentAmount}
          netRentAmountPerSqm={netRentAmountPerSqm}
          grossRentAmount={grossRentAmount}
          grossRentAmountPerSqm={grossRentAmountPerSqm}
          rentCurrency={rentCurrency}
          rooms={rooms}
          floor={floor}
          totalFloors={totalFloors}
          availabilityDate={availabilityDate}
        />
        {venueShow &&
        <React.Fragment>
          {features && features.length > 0 &&
          <div>
            <AnnouncementShowFeaturesFurnishings
              language={language}
              itemsName='features'
              items={features}
            />
          </div>}
          {furnishings && furnishings.length > 0 &&
          <div>
            <AnnouncementShowFeaturesFurnishings
              language={language}
              itemsName='furnishings'
              items={furnishings}
            />
          </div>}
          {(descriptionPolish || descriptionEnglish) &&
          <AnnouncementShowDescription
            language={language}
            descriptionPolish={descriptionPolish}
            descriptionEnglish={descriptionEnglish}
          />}
          <div className='float-clear' />
          <AnnouncementShowMap />
        </React.Fragment>}
        {control}
      </div>
    )
  }
}

export default AnnouncementTile
