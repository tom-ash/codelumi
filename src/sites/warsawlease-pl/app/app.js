import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Header from './components/scaffold/components/header/header'
import Visitor from './components/visitor/visitor'
import Announcement from './components/announcement/announcement'
import Page from '../../shared/app/components/page/page.js'
import User from './components/user/user'
import Footer from './components/scaffold/components/footer/Footer'
import * as lifecycle from './functions/lifecycle'
import { screenSizeHandler } from './functions/screen-size-handler'
import { popStateHandler } from './functions/popStateHandler'
import langHandler from './functions/lang-handler'
import matchStateToUrl from './functions/routers/match-state-to-url'
import matchUrlToLang from './functions/routers/match-url-to-lang.js'
import { changeUrl } from './functions/routers/change-url'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import AppContext from './constants/context.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.screenSizeHandler = screenSizeHandler.bind(this)
    this.popStateHandler = popStateHandler.bind(this)
    this.langHandler = langHandler.bind(this)
    this.matchStateToUrl = matchStateToUrl.bind(this)
    this.changeUrl = changeUrl.bind(this)
    this.matchUrlToLang = matchUrlToLang.bind(this)
  }

  render() {
    const { renderPage, renderVisitor, renderAnnouncement, renderUser } = this.props

    const AppContextValue = { changeUrl: this.changeUrl, matchStateToUrl: this.matchStateToUrl, matchUrlToLang: this.matchUrlToLang }
    const pageProps = { changeUrl: this.changeUrl, langHandler: this.langHandler }

    return (
      <AppContext.Provider value={AppContextValue}>
        {console.log(APP_ENV)}
        <div id='app-container'>
          <Header />
          <div id='app-inner-container'>
            {renderVisitor && <Visitor />}
            {renderAnnouncement && <Announcement />}
            {renderUser && <User />}
            {renderPage && <Page { ...pageProps } />}
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
