import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import UserCreateEmail from './components/email/email'
import * as lifecycle from './functions/lifecycle'
import { langHandler } from '../../../../functions/lang-handler'
import { UserCreateSteps } from './components/steps/steps'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class UserCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const {
      step,
      scalableVectorGraphics,
      creatingAnnouncement
    } = this.props

    return (
      <>
        {!creatingAnnouncement &&
        <>
          <h1 className='page-header'>
            {this.langHandler('Zarejestruj', 'Sign Up')}
          </h1>
          <UserCreateSteps
            step={step}
            scalableVectorGraphics={scalableVectorGraphics}
          />
        </>}
        <div id='user-create-container'
          className={`container${creatingAnnouncement ? ' creating-announcement' : ''}`}
        >
          <UserCreateEmail />
        </div>
      </>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(withStyles(styles)(UserCreate))
