import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Header from './components/scaffold/components/header/header'
// import Visitor from './components/visitor/visitor'
import Announcement from './components/announcement/announcement'
import Page from '../../shared/app/components/page/page.js'
import User from './components/user/user'
import Footer from './components/scaffold/components/footer/Footer'
import * as lifecycle from './functions/lifecycle'
import screenSizeHandler from '../../shared/app/functions/screen/handlers/screen-size.js'
import popStateHandler from '../../shared/app/functions/routes/handlers/pop-state.js'
import langHandler from './functions/lang-handler'
import matchStateToRoute from './functions/routes/matchers/state-to-route.js'
import getRouteByLang from '../../shared/app/functions/routes/getters/route-by-lang.js'
import changeRoute from './functions/routes/changers/route.js'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import AppContext from './constants/context.js'
import CLIENT_URL from '../shared/constants/urls/client.js'
import API_URL from '../shared/constants/urls/api.js'
import pageTileStyles from './components/page/show/styles/styles.scss'
import customNodeParser from './components/page/show/functions/custom-node-parser.js'
import Visitor from '../../shared/app/components/visitor/visitor.js'
import visitorStyles from './components/visitor/styles/styles.scss'
import changeRouteWithHref from './functions/routes/changers/route-with-href.js'
import visitorPrivacyMonitStyles from './components/visitor/components/privacy-monit/styles/styles.scss'

const APP_NAME = 'warsawlease-pl'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.screenSizeHandler = screenSizeHandler.bind(this)
    this.popStateHandler = popStateHandler.bind(this)
    this.langHandler = langHandler.bind(this)
    this.matchStateToRoute = matchStateToRoute.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.getRouteByLang = getRouteByLang.bind(this)
  }

  render() {
    const { renderPage, renderVisitor, renderAnnouncement, renderUser } = this.props

    const AppContextValue = { changeRoute: this.changeRoute, matchStateToRoute: this.matchStateToRoute, getRouteByLang: this.getRouteByLang }
    const pageProps = { customNodeParser, tileStyles: pageTileStyles, clientUrl: CLIENT_URL, apiUrl: API_URL, changeRoute: this.changeRoute, langHandler: this.langHandler }
    const visitorProps = { appName: APP_NAME, changeRoute: this.changeRoute, langHandler: this.langHandler, changeRouteWithHref, styles: visitorStyles, visitorPrivacyMonitStyles }

    return (
      <AppContext.Provider value={AppContextValue}>
        <div id='app-container'>
          <Header />
          <div id='app-inner-container'>
            {renderVisitor && <Visitor {...visitorProps}/>}
            {renderUser && <User />}
            {renderAnnouncement && <Announcement />}
            {renderPage && <Page { ...pageProps } />}
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
