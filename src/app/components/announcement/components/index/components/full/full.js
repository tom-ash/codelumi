import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import AnnouncementTile from '../../../show/components/tile/tile'
import { parseCategoryForUrl } from '../../../../functions/category-parsers'
import { parseDistrictForUrl } from '../../../../functions/district-parsers'
import { parseCurrency } from '../../../../functions/currency-parsers'
import { OffsetSwitcher } from '../offset-switcher/offset-switcher'
import * as lifecycle from './functions/lifecycle'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class AnnouncementIndexFull extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.parseCategoryForUrl = parseCategoryForUrl.bind(this)
    this.parseDistrictForUrl = parseDistrictForUrl.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
  }

  render() {
    const {
      language,
      announcements,
      isMobile,
      scalableVectorGraphics,
      indexFullFarthestScrollTop,
      changeApp,
      changeAnnouncementShowData
    } = this.props

    return (
      <div
        ref={this.container}
        id='announcement-index-full'
      >
        <div id='announcement-index-full-scroll-anchor' />
        <div className='announcements'>
          {announcements && announcements.map((announcement, index) => {
            return (
              <AnnouncementTile
                isMobile={isMobile}
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
                scalableVectorGraphics={scalableVectorGraphics}
                indexFullFarthestScrollTop={indexFullFarthestScrollTop}
                changeApp={changeApp}
                changeData={changeAnnouncementShowData}
              />
            )
          })}
          </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexFull))
