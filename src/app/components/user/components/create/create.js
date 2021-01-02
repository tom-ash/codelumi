import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import UserCreateEmail from './components/email/email'
import * as lifecycle from './functions/lifecycle'
import { languageHandler } from '../../../../functions/language-handler'
import { UserCreateSteps } from './components/steps/steps'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class UserCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.languageHandler = languageHandler.bind(this)
  }

  render() {
    const {
      step,
      scalableVectorGraphics
    } = this.props

    return (
      <div
        id='user-create-container'
        className='container'
      >
        <h1 className='page-header'>
          {this.languageHandler('Zarejestruj', 'Sign Up')}
        </h1>
        <UserCreateSteps
          step={step}
          scalableVectorGraphics={scalableVectorGraphics}
        />
        <UserCreateEmail />
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(withStyles(styles)(UserCreate))
