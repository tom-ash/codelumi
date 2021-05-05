import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import Page from '../../shared/app/components/page/page.js'
import Visitor from '../../shared/app/components/visitor/visitor.js'
import * as lifecycle from './functions/lifecycle'
import langHandler from '../../shared/app/functions/lang/handlers/lang.js'
import screenSizeHandler from '../../shared/app/functions/screen/handlers/screen-size.js'
import popStateHandler from '../../shared/app/functions/routes/handlers/pop-state.js'
import matchStateToRoute from './functions/routes/matchers/state-to-route.js'
import getRouteByLang from '../../shared/app/functions/routes/getters/route-by-lang.js'
import changeRoute from './functions/routes/changers/route.js'
import changeRouteWithHref from './functions/routes/changers/route-with-href.js'
import styles from './styles/styles.scss'
import AppContext from './constants/context.js'
import CLIENT_URL from '../shared/constants/urls/client.js'
import API_URL from '../shared/constants/urls/api.js'
import pageShowStyles from './components/page/show/styles/styles.scss'
import customNodeParser from './components/page/show/functions/custom-node-parser.js'
import Header from './components/scaffold/header/header.js'
import Footer from '../../shared/app/components/scaffold/footer/footer.js'
import * as langs from '../shared/constants/langs/langs.js'
import * as urls from '../shared/constants/routes/urls.js'
import * as titles from '../shared/constants/routes/titles.js'
import headerStyles from './components/scaffold/header/styles/styles.scss'
import footerStyles from './components/scaffold/footer/styles/styles.scss'
import visitorStyles from './components/visitor/styles/styles.scss'

const APP_NAME = 'codelumi'

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
    const AppContextValue = { changeRoute: this.changeRoute, matchStateToRoute: this.matchStateToRoute, getRouteByLang: this.getRouteByLang }
    const { lang, renderPage, renderVisitor, renderAnnouncement, renderUser } = this.props
    const headerProps = { clientUrl: CLIENT_URL, changeRoute: this.changeRoute, langHandler: this.langHandler, styles: headerStyles }
    const footerProps = { langs, urls, titles, clientUrl: CLIENT_URL, changeRoute: this.changeRoute, langHandler: this.langHandler, styles: footerStyles }
    const pageProps = { customNodeParser, tileStyles: pageShowStyles, clientUrl: CLIENT_URL, apiUrl: API_URL, changeRoute: this.changeRoute, langHandler: this.langHandler }
    const visitorProps = { appName: APP_NAME, changeRoute: this.changeRoute, langHandler: this.langHandler, changeRouteWithHref, styles: visitorStyles }
    
    return (
      <AppContext.Provider value={AppContextValue}>
        <div id='app-container'>
          <Header {...headerProps}/>
          <div id='app-inner-container'>  
            {renderPage && <Page { ...pageProps } />}
            {renderVisitor && <Visitor {...visitorProps} />}
          </div>
          <Footer {...footerProps}/>
        </div>
      </AppContext.Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
