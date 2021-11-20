import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles'
import Page from '../../shared/app/components/page/page.js'
import Visitor from '../../shared/app/components/visitor/visitor.js'
const Announcement = loadable(() => import('./components/announcement/announcement.js'))
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import styles from './styles/styles.scss'
import headerStyles from './components/scaffold/header/styles/styles.scss'
import * as lifecycle from './functions/lifecycle'
import langHandler from '../../shared/app/functions/lang/handlers/lang.js'
import screenSizeHandler from '../../shared/app/functions/screen/handlers/screen-size.js'
import popStateHandler from '../../shared/app/functions/routes/handlers/pop-state.js'
import matchStateToRoute from './functions/routes/matchers/state-to-route.js'
import getRouteByLang from '../../shared/app/functions/routes/getters/route-by-lang.js'
import changeRoute from './functions/routes/changers/route.js'
import changeRouteWithHref from './functions/routes/changers/route-with-href.js'
import AppContext from './constants/context.js'
import CLIENT_URL from '../shared/constants/urls/client.js'
import API_URL from '../shared/constants/urls/api.js'
import customNodeParser from './components/page/show/functions/custom-node-parser.js'
import customMetaParser from './components/page/show/functions/custom-meta-parser.js'
import Header from '../../shared/app/components/scaffold/header/header.js'
import Footer from '../../shared/app/components/scaffold/footer/footer.js'
import { LANGS } from '../shared/constants/langs/langs.js'
import routes from '../shared/constants/routes/routes.js'
import * as urls from '../shared/constants/routes/urls.js'
import Logo from './components/scaffold/header/components/logo/logo.js'
import HeaderCustomization from './components/scaffold/header/components/customization/customization.js'
import initSentry from '../../shared/app/functions/analytics/sentry/init.js'

initSentry()

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
    const { render, renderPage, renderVisitor, renderAnnouncement, device, links, lang, pageShowData, pageEditData, changeApp } = this.props
    const urlComposites = { pageShowData, pageEditData }
    const sharedProps = { appName: APP_NAME, render, routes, urls, langs: LANGS, links, clientUrl: CLIENT_URL, apiUrl: API_URL, device, lang, changeRoute: this.changeRoute, changeRouteWithHref, changeApp, langHandler: this.langHandler }
    const headerProps = { ...sharedProps, urlComposites, Logo, HeaderCustomization, styles: headerStyles }
    const pageProps = { ...sharedProps, customNodeParser, customMetaParser }
    
    return (
      <AppContext.Provider value={AppContextValue}>
        <div id='app-container'>
          <Header {...headerProps}/>
          <div id='app-inner-container'>  
            {renderPage && <Page {...pageProps} />}
            {renderVisitor && <Visitor {...sharedProps} />}
            {renderAnnouncement && <Announcement />}
          </div>
          <Footer {...sharedProps}/>
        </div>
      </AppContext.Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
