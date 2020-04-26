import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../functions/language-handler'
import UserAuthorizeEmailTrack from './components/email-password/email-password'
import { CloseButton } from '../../../../components/support/components/close-button/close-button'
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
          className='container narrow-container shadowed'
        >
          <h1 className='page-header'>
            <i className='fas fa-sign-in-alt' /> {this.languageHandler('Logowanie', 'Signing In')}
          </h1>
          <CloseButton onClick={this.hideUser} classNames='page narrow'/>
          <UserAuthorizeEmailTrack />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorize)
