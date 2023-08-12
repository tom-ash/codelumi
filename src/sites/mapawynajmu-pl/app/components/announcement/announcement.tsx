import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps } from './constants/mappers'
const AnnouncementCreate = loadable(() => import('./components/create/create'))
const AnnouncementIndex = loadable(() => import('./components/index/index'))
const ListingBoost = loadable(() => import('./components/boost/boost'))

class Announcement extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
  }

  render() {
    // @ts-ignore
    const { renderCreate, renderEdit, renderIndex, listingBoost } = this.props

    return (
      <React.Fragment>
        {(renderCreate || renderEdit) && <AnnouncementCreate />}
        {renderIndex && <AnnouncementIndex />}
        {listingBoost && <ListingBoost />}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(Announcement)
