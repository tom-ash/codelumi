import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler, langObjHandler } from '../../../../../../functions/lang-handler'
import Tile from '../../../common/tile/tile.js'
import { parseCategoryForUrl } from '../../../../functions/category-parsers'
import { parseDistrictForUrl } from '../../../../functions/district-parsers'
import { parseCurrency } from '../../../../functions/currency-parsers'
import * as lifecycle from './functions/lifecycle'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { changeRoute } from '../../../../../../functions/routers/change-route'

class AnnouncementIndexCatalogue extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.parseCategoryForUrl = parseCategoryForUrl.bind(this)
    this.parseDistrictForUrl = parseDistrictForUrl.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
    this.changeRoute = changeRoute.bind(this)
  }

  render() {
    const {
      lang,
      announcements,
      isMobile,
      scalableVectorGraphics,
      indexFullFarthestScrollTop,
      changeApp,
      changeAnnouncementShowData,
      changeRoute
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
                scalableVectorGraphics={scalableVectorGraphics}
                indexFullFarthestScrollTop={indexFullFarthestScrollTop}
                changeApp={changeApp}
                changeData={changeAnnouncementShowData}
                changeRoute={this.changeRoute}
              />
            )
          })}
          </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexCatalogue))
