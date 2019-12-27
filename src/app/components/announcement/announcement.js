import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndex from './components/index/index'
const AnnouncementCreate = lazy(() => import('./components/create/create'))
const AnnouncementShow = lazy(() => import('./components/show/show'))
import './styles/styles.scss'

class Announcement extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { showCreate, showEdit, showVisitor, showUser, showShow } = this.props

    return (
      <React.Fragment>
        {(showVisitor || showUser) && <AnnouncementIndex />}
        <Suspense fallback={null}>
          {(showCreate || showEdit) && <AnnouncementCreate />}
          {showShow && <AnnouncementShow />}
        </Suspense>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcement)
