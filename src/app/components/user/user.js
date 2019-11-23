import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { checkRoute } from '../../functions/routers'
import UserCreate from './components/create/create'
import UserAuthorize from './components/authorize/authorize'
import UserShow from './components/show/show'
import UserEdit from './components/edit/edit'
import './styles/styles.scss'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.checkRoute = checkRoute.bind(this)
  }

  hideCreate = () => {
    console.log('here')
    const { changeControl, changeShowUser } = this.props
    changeControl({ showCreate: false })
    changeShowUser(false)
  }

  render() {
    const { changeControl, showCreate, showAuthorize } = this.props

    return (
      <div id='user'>
        {showCreate &&
        <div
        onClick={this.hideCreate}
        className='cover'>
          <UserCreate />
        </div>}
        {showAuthorize &&
        <div className='cover'>
          <UserAuthorize />
        </div>}
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
