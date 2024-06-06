import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
const AnnouncementCreateForm = loadable(() => import('./components/form/form'))
import { Create } from './constants/types'

class AnnouncementCreate extends React.Component<Create> {
  constructor(props: Create) {
    super(props)
  }

  render() {
    return (
      <div id='postings-new'>
        <AnnouncementCreateForm />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
