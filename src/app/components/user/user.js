import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
const UserCreate = lazy(() => import('./components/create/create'))
const UserAuthorize = lazy(() => import('./components/authorize/authorize'))
const UserShow = lazy(() => import('./components/show/show'))
const UserEditAccountPassword = lazy(() => import('./components/edit/components/account/components/password/password'))
const UserEditPhoneNumberVerify = lazy(() => import('./components/edit/components/phone/components/verify/verify'))
const UserEditAccount = lazy(() => import('./components/edit/components/account/account'))
import './styles/styles.scss'

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  hideUser = () => {
    const { changeApp, changeAnnouncementControl } = this.props

    changeApp({ showUserCreate: false, showUserAuthorize: false, showUserEditPasswordReset: false,
                showUserShow: false, showUserEditAccount: false, showUserEditPhoneVerify: false })
    changeAnnouncementControl({ publishing: false })
  }

  render() {
    const { showCreate, showAuthorize, showPasswordReset, showEditPhoneVerify, showAccount, showEdit } = this.props

    return (
      <Suspense fallback={null}>
        {(showCreate || showAuthorize || showPasswordReset || showEditPhoneVerify) &&
        <div onClick={this.hideUser} className='darkened-cover '>
          {showCreate          && <UserCreate />}
          {showAuthorize       && <UserAuthorize />}
          {showPasswordReset   && <UserEditAccountPassword />}
          {showEditPhoneVerify && <UserEditPhoneNumberVerify />}
        </div>}
        {showAccount &&
        <div onClick={this.hideUser} className='transparent-cover'>
          <UserShow />
        </div>}
        {showEdit && <UserEditAccount />}
      </Suspense>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
