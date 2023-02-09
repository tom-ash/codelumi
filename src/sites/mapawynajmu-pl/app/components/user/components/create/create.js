import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import UserCreateEmail from './components/email/email'
import { langHandler } from '../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'

class UserCreate extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const { step, renderAnnouncementCreate } = this.props

    if (renderAnnouncementCreate) return <UserCreateEmail />

    return (
      <>
        <div id='user-create'>
          <UserCreateEmail />
        </div>
      </>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(withStyles(styles)(UserCreate))
