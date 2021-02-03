import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import UserCreateEmail from './components/email/email'
import * as lifecycle from './functions/lifecycle'
import { langHandler } from '../../../../functions/lang-handler'
import { UserCreateSteps } from './components/steps/steps'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import Header from '../../../support/components/header/header'

class UserCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const { step, svgs, creatingAnnouncement } = this.props
    const headerText = this.langHandler('Zarejestruj', 'Register')
    const headerSvgPathData = svgs && svgs.user_plus
    const classNames = []

    if (creatingAnnouncement) classNames.push('creating-announcement')

    return (
      <>
        {!creatingAnnouncement && <UserCreateSteps step={step} svgs={svgs} />}
        <div id='user-create' className={classNames.join(' ')}>
          {!creatingAnnouncement && <Header viewBox={'0 0 640 512'} tier={1} text={headerText} svgPathData={headerSvgPathData} />}
          <UserCreateEmail />
        </div>
      </>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(withStyles(styles)(UserCreate))
