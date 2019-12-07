import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Header from './components/scaffold/components/header/header'
import Visitor from './components/visitor/visitor'
import Announcement from './components/announcement/announcement'
import User from './components/user/user'
import Footer from './components/scaffold/components/footer/Footer'
import * as lifecycle from './functions/lifecycle'
import * as routers from './functions/routers'
import { authorizeUserWithTokens } from './components/user/components/authorize/components/tokens/functions/adapters.js'
import './styles/styles.scss'
import { screenSizeHandler } from './functions/screen-size-handler'
import { popStateHandler } from './functions/popStateHandler'
import { languageObjectHandler } from './functions/language-handler'
import { handlePathname } from './functions/routers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.changeRoute = routers.changeRoute.bind(this)
    this.checkRoute = routers.checkRoute.bind(this)
    this.popStateRoute = routers.popStateRoute.bind(this)
    this.authorizeUserWithTokens = authorizeUserWithTokens.bind(this)
    this.screenSizeHandler = screenSizeHandler.bind(this)
    this.popStateHandler = popStateHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.handlePathname = handlePathname.bind(this)
  }

  showUser = () => {
    const {
      showUserCreate,
      showUserAuthorize,
      showUserEditPasswordReset,
      showUserShow,
      showUserEditAccount,
      showUserEditPhoneVerify
    } = this.props

    return showUserCreate || showUserAuthorize || showUserEditPasswordReset || showUserShow || showUserEditAccount || showUserEditPhoneVerify
  }

  render() {
    return (
      <div id='app-container'>
        <Header />
        <div id='app-inner-container'>
          <Visitor />
          <Announcement />
          {this.showUser() && <User />}
        </div>
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
