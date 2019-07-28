import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { checkRoute } from '../../../../functions/routers'
import UserShowAccount from './components/account/account'

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.checkRoute = checkRoute.bind(this)
  }

  render() {
    return (
      <div id='user-show'>
        {
        this.checkRoute('UserShowAccount') &&
        <UserShowAccount />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
