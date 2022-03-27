//@ts-ignore
import React from 'react'
//@ts-ignore
import loadable from '@loadable/component'
//@ts-ignore
import { connect } from 'react-redux'
//@ts-ignore
import withStyles from 'isomorphic-style-loader/withStyles'
//@ts-ignore
const AnnouncementCreate = loadable(() => import('./components/create/create.js'))
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
//@ts-ignore
import styles from './styles/styles.scss'
import { announcementProps } from './constants/types'

class Announcement extends React.Component<any, any> {
  constructor(props: announcementProps) {
    super(props)
  }

  render() {
    //@ts-ignore
    const { renderCreate, changeRoute } = this.props

    const announcementCreateProps = {
      changeRoute
    }

    return (
      <div id='announcement'>
        {renderCreate && <AnnouncementCreate />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Announcement))
