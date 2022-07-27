import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles'
const AnnouncementCreate = loadable(() => import('./components/create/create'))
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import styles from './styles/styles.scss'
import { announcementProps } from './constants/types'

class Announcement extends React.Component<announcementProps, any> {
  constructor(props: announcementProps) {
    super(props)
  }

  render() {
    const { renderCreate, changeRoute } = this.props

    const announcementCreateProps = {
      changeRoute
    }

    return (
      <div id='announcement'>
        {/* @ts-ignore */}
        {renderCreate && <AnnouncementCreate {...announcementCreateProps} />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Announcement))
