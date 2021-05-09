import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Header from './components/scaffold/components/header/header'
import Visitor from '../../shared/app/components/visitor/visitor.js'
import Announcement from './components/announcement/announcement'
import Page from '../../shared/app/components/page/page.js'
import User from './components/user/user'
import Footer from '../../shared/app/components/scaffold/footer/footer.js'
import * as lifecycle from './functions/lifecycle'
import screenSizeHandler from '../../shared/app/functions/screen/handlers/screen-size.js'
import popStateHandler from '../../shared/app/functions/routes/handlers/pop-state.js'
import langHandler from './functions/lang-handler'
import matchStateToRoute from './functions/routes/matchers/state-to-route.js'
import getRouteByLang from '../../shared/app/functions/routes/getters/route-by-lang.js'
import changeRoute from './functions/routes/changers/route.js'
import AppContext from './constants/context.js'
import CLIENT_URL from '../shared/constants/urls/client.js'
import API_URL from '../shared/constants/urls/api.js'
import customNodeParser from './components/page/show/functions/custom-node-parser.js'
import changeRouteWithHref from './functions/routes/changers/route-with-href.js'
import routes from '../shared/constants/routes/routes.js'
import * as langs from '../shared/constants/langs/langs.js'
import * as urls from '../shared/constants/routes/urls.js'
import * as titles from '../shared/constants/routes/titles.js'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

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
    const { render, renderPage, renderVisitor, renderAnnouncement, renderUser, lang, pageShowData, pageEditData, announcementShowData, announcementEditData, changeRender } = this.props
    const AppContextValue = { changeRoute: this.changeRoute, matchStateToRoute: this.matchStateToRoute, getRouteByLang: this.getRouteByLang }
    const sharedProps = { appName: APP_NAME, routes, urls, langs, titles, clientUrl: CLIENT_URL, apiUrl: API_URL, render, changeRoute: this.changeRoute, changeRouteWithHref, changeRender, langHandler: this.langHandler }
    const pageProps = { ...sharedProps, customNodeParser }
    const urlComposites = { pageShowData, pageEditData, announcementShowData, announcementEditData }

    return (
      <AppContext.Provider value={AppContextValue}>
        <div id='app-container'>
          <Header { ...{ ...sharedProps, urlComposites, lang }}/>
          <div id='app-inner-container'>
            {renderAnnouncement && <Announcement/>}
            {renderPage && <Page {...pageProps}/>}
            {renderVisitor && <Visitor {...sharedProps}/>}
            {renderUser && <User/>}
          </div>
          <Footer {...sharedProps}/>
        </div>
      </AppContext.Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
