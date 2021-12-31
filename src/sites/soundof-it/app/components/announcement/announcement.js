import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles'
const AnnouncementCreate = loadable(() => import('./components/create/create.js'))
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import styles from './styles/styles.scss'

class Announcement extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { renderCreate } = this.props

    return (
      <div id='announcement'>
        {renderCreate && <AnnouncementCreate />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Announcement))
