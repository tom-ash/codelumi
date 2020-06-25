import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../functions/language-handler'
import UserAuthorizeEmailTrack from './components/email-password/email-password'
import { hideUser } from '../../functions/hide-user'

class UserAuthorize extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.hideUser = hideUser.bind(this)
  }

  render() {
    return (
      <React.Fragment>
        <div
          id='user-authorize'
          className='container'
        >
          <h1 className='page-header'>
            {this.languageHandler('Zaloguj', 'Sign In')}
          </h1>
          <UserAuthorizeEmailTrack />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorize)
