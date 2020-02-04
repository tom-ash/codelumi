import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndex from './components/index/index'
import AnnouncementCreate from './components/create/create'
import AnnouncementShow from './components/show/show'

class Announcement extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { showCreate, showEdit, showVisitor, showUser, showShow } = this.props

    return (
      <React.Fragment>
        {(showVisitor || showUser) && <AnnouncementIndex />}
        {(showCreate || showEdit) && <AnnouncementCreate />}
        {showShow && <AnnouncementShow />}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcement)
