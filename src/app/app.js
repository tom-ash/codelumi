import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Header from './components/scaffold/components/header/header'
import Visitor from './components/visitor/visitor'
import Announcement from './components/announcement/announcement'
import User from './components/user/user'
import Footer from './components/scaffold/components/footer/Footer'
import * as lifecycle from './functions/lifecycle'
import * as routers from './functions/routers/change-path'
import { authorizeUserWithTokens } from './components/user/components/authorize/components/tokens/functions/adapters.js'
import { screenSizeHandler } from './functions/screen-size-handler'
import { popStateHandler } from './functions/popStateHandler'
import { languageObjectHandler } from './functions/language-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { matchStateToPath } from './functions/routers/match-state-to-path'
import { matchPathToState } from './functions/routers/match-path-to-state'
import VisitorWelcome from './components/visitor/components/welcome/welcome'

import Blog from './components/blog/blog'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.authorizeUserWithTokens = authorizeUserWithTokens.bind(this)
    this.screenSizeHandler = screenSizeHandler.bind(this)
    this.popStateHandler = popStateHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.changePath = routers.changePath.bind(this)
    this.matchStateToPath = matchStateToPath.bind(this)
    this.matchPathToState = matchPathToState.bind(this)
    this.appContainer = React.createRef()
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

    return showUserCreate ||
           showUserAuthorize ||
           showUserEditPasswordReset ||
           showUserShow ||
           showUserEditAccount ||
           showUserEditPhoneVerify
  }

  render() {
    const { showBlog } = this.props

    return (
      <div id='app-container' ref={this.appContainer}>
        <VisitorWelcome />
        <Header />
        <div id='app-inner-container'>
          {this.showUser() && <User />}
          <Visitor appContainer={this.appContainer.current}/>
          <Announcement />
        </div>
        {/* {conso} */}
        {showBlog && <Blog />}
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
