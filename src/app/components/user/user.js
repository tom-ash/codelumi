import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { checkRoute } from '../../functions/routers'
import UserCreate from './components/create/create'
import UserAuthorize from './components/authorize/authorize'
import UserShow from './components/show/show'
import UserEdit from './components/edit/edit'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.checkRoute = checkRoute.bind(this)
  }
  render() {
    return (
      <div id='user'>
        {
        this.checkRoute('userCreate') &&
        <UserCreate />
        }
        {
        this.checkRoute('userAuthorize') &&
        <UserAuthorize />
        }
        {
        this.checkRoute('userShow') &&
        <UserShow />
        }
        {
        this.checkRoute('userEdit') &&
        <UserEdit />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
