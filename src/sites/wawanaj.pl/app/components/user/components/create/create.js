import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import UserCreateEmail from './components/email/email'
import * as lifecycle from './functions/lifecycle'
import { langHandler } from '../../../../functions/lang-handler'
import { UserCreateSteps } from './components/steps/steps'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import ScalableVectorGraphic from '../../../support/components/scalable-vector-graphic/scalable-vector-graphic'
import Header from '../../../support/components/header/header'

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

    const svgs = scalableVectorGraphics
    const headerText = this.langHandler('Zarejestruj', 'Register')
    const headerSvgPathData = scalableVectorGraphics && scalableVectorGraphics.user

    return (
      <>
        {!creatingAnnouncement && <UserCreateSteps step={step} scalableVectorGraphics={svgs} />}
        <div id='user-create-container'
          className={`container${creatingAnnouncement ? ' creating-announcement' : ''}`}
        >
          <Header tier={1} text={headerText} svgPathData={headerSvgPathData} />
          <UserCreateEmail />
        </div>
      </>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(withStyles(styles)(UserCreate))
