import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Header from './components/scaffold/components/header/header'
import Visitor from './components/visitor/visitor'
import Announcement from './components/announcement/announcement'
import Page from './components/page/page'
import User from './components/user/user'
import Footer from './components/scaffold/components/footer/Footer'
import * as lifecycle from './functions/lifecycle'
import { authorizeUserWithTokens } from './components/user/components/authorize/components/tokens/functions/adapters.js'
import { screenSizeHandler } from './functions/screen-size-handler'
import { popStateHandler } from './functions/popStateHandler'
import { langObjHandler } from './functions/lang-handler'
import matchStateToRoute from './functions/routers/match-state-to-route'
import matchPathToLanguage from './functions/routers/match-path-to-lang.js'
import { changeRoute } from './functions/routers/change-route'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import AppContext from './constants/context.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.authorizeUserWithTokens = authorizeUserWithTokens.bind(this)
    this.screenSizeHandler = screenSizeHandler.bind(this)
    this.popStateHandler = popStateHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.matchStateToRoute = matchStateToRoute.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.matchPathToLanguage = matchPathToLanguage.bind(this)
  }

  render() {
    const { renderPage, renderVisitor, renderAnnouncement, renderUser } = this.props

    const AppContextValue = { changeRoute: this.changeRoute, matchStateToRoute: this.matchStateToRoute, matchPathToLanguage: this.matchPathToLanguage }

    return (
      <AppContext.Provider value={AppContextValue}>
        <div id='app-container'>
          <Header />
          <div id='app-inner-container'>
            {renderVisitor && <Visitor />}
            {renderAnnouncement && <Announcement />}
            {renderUser && <User />}
            {renderPage && <Page />}
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
