import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles'
import Page from '../../shared/app/components/page/page'
import Visitor from '../../shared/app/components/visitor/visitor'
const Announcement = loadable(() => import('./components/announcement/announcement'))
const Image = loadable(() => import('../../shared/app/components/image/image'))
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import styles from './styles/styles.scss'
import headerStyles from './components/scaffold/header/styles/styles.scss'
import * as lifecycle from './functions/lifecycle'
import langHandler from '../../shared/app/functions/lang/handlers/lang.js'
import screenSizeHandler from '../../shared/app/functions/screen/handlers/screen-size.js'
import popStateHandler from '../../shared/app/functions/routes/handlers/pop-state.js'
import matchStateToRoute from './functions/routes/matchers/state-to-route.js'
import changeRoute from './functions/routes/changers/route.js'
import AppContext from './constants/context.js'
import CLIENT_URL from '../shared/constants/urls/client.js'
import API_URL from '../shared/constants/urls/api.js'
import Header from '../../shared/app/components/scaffold/header/header.js'
import Footer from '../../shared/app/components/scaffold/footer/footer.js'
import { LANGS } from '../shared/constants/langs/langs.js'
import Logo from './components/scaffold/header/components/logo/logo.js'
import HeaderCustomization from './components/scaffold/header/components/customization/customization.js'
import initSentry from '../../shared/app/functions/analytics/sentry/init.js'
import buildUrl from '../shared/functions/routes/builders/url.js'

initSentry()

const APP_NAME = 'soundof-it'

class App extends React.Component {
  screenSizeHandler: () => void
  // @ts-ignore
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.screenSizeHandler = screenSizeHandler.bind(this)
    // @ts-ignore
    this.popStateHandler = popStateHandler.bind(this)
    // @ts-ignore
    this.langHandler = langHandler.bind(this)
    // @ts-ignore
    this.matchStateToRoute = matchStateToRoute.bind(this)
    // @ts-ignore
    this.changeRoute = changeRoute.bind(this)
  }
  

  render() {
    // @ts-ignore
    const AppContextValue = { changeRoute: this.changeRoute, matchStateToRoute: this.matchStateToRoute }
    // @ts-ignore
    const { render, renderPage, renderImage, renderVisitor, renderAnnouncement, device, links, lang, pageShowData, pageEditData, changeApp } = this.props
    // @ts-ignore
    const urlComposites = { pageShowData, pageEditData }
    // @ts-ignore
    const sharedProps = { appName: APP_NAME, render, langs: LANGS, links, clientUrl: CLIENT_URL, apiUrl: API_URL, device, lang, changeRoute: this.changeRoute, buildUrl, changeApp, langHandler: this.langHandler }
    const headerProps = { ...sharedProps, urlComposites, Logo, HeaderCustomization, styles: headerStyles }
    const pageProps = { ...sharedProps }
    const imageProps = sharedProps
    
    return (
      <AppContext.Provider value={AppContextValue}>
        <Header {...headerProps}/>
        {/* @ts-ignore */}
        {renderPage && <Page {...pageProps} />}
        {renderVisitor && <Visitor {...sharedProps} />}
        {renderAnnouncement && <Announcement {...sharedProps} />}
        {renderImage && <Image {...imageProps} />}
        <Footer {...sharedProps}/>
      </AppContext.Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
