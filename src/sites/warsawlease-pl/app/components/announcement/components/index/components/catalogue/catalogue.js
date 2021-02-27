import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langHandler from '../../../../../../functions/lang-handler'
import Tile from '../../../common/tile/tile.js'
import { parseCategoryForUrl } from '../../../../functions/category-parsers'
import { parseDistrictForUrl } from '../../../../functions/district-parsers'
import { parseCurrency } from '../../../../functions/currency-parsers'
import * as lifecycle from './functions/lifecycle'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class AnnouncementIndexCatalogue extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.langHandler = langHandler.bind(this)
    this.parseCategoryForUrl = parseCategoryForUrl.bind(this)
    this.parseDistrictForUrl = parseDistrictForUrl.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
  }

  render() {
    const {
      lang,
      announcements,
      isMobile,
      indexFullFarthestScrollTop,
      changeApp,
      changeAnnouncementShowData
    } = this.props

    return (
      <div
        ref={this.container}
        id='announcement-index-catalogue'
      >
        <div id='announcement-index-catalogue-scroll-anchor' />
        <div className='announcements'>
          {announcements && announcements.map((announcement, index) => {
            return (
              <Tile
                isMobile={isMobile}
                venue='full'
                showPhoneSwitch
                index={index}
                first={index === 0}                  
                key={announcement.id}
                lang={lang}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexCatalogue))
