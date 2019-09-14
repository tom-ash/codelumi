import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexFull from './components/full/full'
import AnnouncementIndexMap from './components/map/map'
import AnnouncementIndexList from './components/list/list'
import { checkRoute } from '../../../../functions/routers'
import './styles/styles.scss'

class AnnouncementIndexSearch extends React.Component {
  constructor(props) {
    super(props)
    this.checkRoute = checkRoute.bind(this)
  }

  render() {
    return (
      <div id='announcement-index'>
        {
        this.checkRoute('announcementIndexFull') &&
        <AnnouncementIndexFull />
        }
        {
        this.checkRoute('announcementIndexList') &&
        <AnnouncementIndexList />
        }
        {
        this.checkRoute('mainPage') &&
        <AnnouncementIndexMap />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexSearch)