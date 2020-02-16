import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import AnnouncementTile from '../../../show/components/tile/tile'
import { paginationManager } from './functions/managers'
import { parseCategoryForUrl } from '../../../../functions/category-parsers'
import { parseDistrictForUrl } from '../../../../functions/district-parsers'
import { parseCurrency } from '../../../../functions/currency-parsers'
import { OffsetSwitcher } from '../offset-switcher/offset-switcher'

class AnnouncementIndexFull extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.parseCategoryForUrl = parseCategoryForUrl.bind(this)
    this.parseDistrictForUrl = parseDistrictForUrl.bind(this)
    this.parseCurrency = parseCurrency.bind(this)    
    this.paginationManager = paginationManager.bind(this)
  }

  render() {
    const {
      language,
      changeControl, changeInputs, offset, amount, showAnnouncementIndexList, announcements
    } = this.props

    return (
      <div id='announcement-index-full'>
        {
        showAnnouncementIndexList &&
        <div>
          <div id='announcement-index-full-scroll-anchor' />
          <div className='announcements'>
            {
            announcements && announcements.map((announcement, index) => {
              console.log(announcement)
              return (
                <AnnouncementTile
                  venue='full'
                  showPhoneSwitch
                  index={index}
                  first={index === 0}                  
                  key={announcement.id}
                  language={language}
                  id={announcement.id}
                  category={announcement.category}
                  district={announcement.district}
                  pictures={announcement.pictures}
                  area={announcement.area}
                  netRentAmount={announcement.netRentAmount}
                  netRentAmountPerSqm={announcement.netRentAmountPerSqm}
                  grossRentAmount={announcement.grossRentAmount}
                  grossRentAmountPerSqm={announcement.grossRentAmountPerSqm}
                  rooms={announcement.rooms}
                  rentCurrency={announcement.rentCurrency}
                  floor={announcement.floor}
                  totalFloors={announcement.totalFloors}
                  availabilityDate={announcement.availabilityDate}
                />
              )
            })
            }
            {amount > 50 && offset + 1 !== amount &&
            <OffsetSwitcher
              changeControl={changeControl}
              changeInputs={changeInputs}
              offset={offset}
              amount={amount}
              languageHandler={this.languageHandler}
              scrollTop={true}
            />}
          </div>
        </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexFull)