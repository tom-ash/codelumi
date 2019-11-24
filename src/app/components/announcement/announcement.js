import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { checkRoute } from '../../functions/routers'
import { showAnnouncement } from './functions/routers'
import AnnouncementCreate from './components/create/create'
import AnnouncementShow from './components/show/show'
import AnnouncementIndex from './components/index/index'
import './styles/styles.scss'

class Announcement extends React.Component {
  constructor(props) {
    super(props)
    this.checkRoute = checkRoute.bind(this)
  }
  render() {
    return (
      <div id='announcement'>
        {
        (this.checkRoute('announcementCreate') || this.checkRoute('editAnnouncement')) &&
        <AnnouncementCreate />
        }
        {
        this.checkRoute('announcementIndex') &&
        <AnnouncementIndex />
        }
        {
        showAnnouncement() &&
        <AnnouncementShow />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcement)
