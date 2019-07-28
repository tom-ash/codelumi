import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { componentDidUpdate } from './functions/lifecycle'
import { changeRoute } from '../../../../functions/routers'
import { languageHandler } from '../../../../functions/language-handler'
import UserAuthorizeEmailTrack from './components/email-password/email-password'
import './styles/styles.scss'

class UserAuthorize extends React.Component {
  constructor(props) {
    super(props)
    this.changeRoute = changeRoute.bind(this)
    this.componentDidUpdate = componentDidUpdate.bind(this)
    this.languageHandler = languageHandler.bind(this)
  }

  render() {
    return (
      <div id='user-authorize'>
        <h2 className='page-header'>
          <i className='fas fa-sign-in-alt' /> {this.languageHandler('Logowanie', 'Signing In')}
        </h2>
        <UserAuthorizeEmailTrack />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorize)
