import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
const AnnouncementCreate = loadable(() => import('./components/create/create'))
const AnnouncementShow = loadable(() => import('./components/show/show'))
const AnnouncementIndex = loadable(() => import('./components/index/index'))
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class Announcement extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      renderCreate,
      renderIndex,
      renderShow
    } = this.props

    return (
      <React.Fragment>
        {renderCreate && <AnnouncementCreate />}
        {renderIndex && <AnnouncementIndex />}
        {renderShow && <AnnouncementShow />}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Announcement))
