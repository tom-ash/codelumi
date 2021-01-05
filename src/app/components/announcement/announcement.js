import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
const AnnouncementCreate = loadable(() => import('./components/create/create'))
const AnnouncementShow = loadable(() => import('./components/show/show'))
const AnnouncementIndex = loadable(() => import('./components/index/index'))

class Announcement extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      renderCreate,
      renderEdit,
      renderIndex,
      renderShow
    } = this.props

    return (
      <React.Fragment>
        {(renderCreate || renderEdit) && <AnnouncementCreate />}
        {renderIndex && <AnnouncementIndex />}
        {renderShow && <AnnouncementShow />}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Announcement))
