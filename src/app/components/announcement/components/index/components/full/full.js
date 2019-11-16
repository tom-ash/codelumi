import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { ManagedPagination } from 'managed-inputs'
import AnnouncementIndexTile from '../tile/tile'
import { paginationManager } from './functions/managers'
import './styles/styles.scss'
import { parseCategoryForUrl } from '../../../../functions/category-parsers'
import { parseDistrictForUrl } from '../../../../functions/district-parsers'
import { parseCurrency } from '../../../../functions/currency-parsers'

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
    const { type, announcements } = this.props

    return (
      <div id='announcement-index-full'>
        {
        type === 'full' &&
        <div>
          <div id='announcement-index-full-scroll-anchor' />
          <div className='announcements'>
            {
            announcements && announcements.map((announcement, index) => {
              return (
                <AnnouncementIndexTile
                  index={index}
                  first={index === 0}
                  venue='full'
                  key={announcement.id}
                  selectedAvailabilityDate={this.props.availabilityDate}
                  announcement={announcement}
                  announcements={announcements}
                  changeAnnouncement={this.props.changeAnnouncement}
                  scrollY={this.props.scrollY}
                />
              )
            })
            }
            <div className='float-clear' />
            {/* {
            announcements && announcements[announcements.length - 1] && announcements[announcements.length - 1].show &&
            <ManagedPagination {...this.paginationManager()} />
            } */}
          </div>
        </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexFull)