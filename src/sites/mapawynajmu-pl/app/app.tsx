import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import Visitor from '../../shared/app/components/visitor/visitor'
import Announcement from './components/announcement/announcement'
import Page from '../../shared/app/components/page/page'
import User from './components/user/user'
import Footer from '../../shared/app/components/scaffold/footer/footer'
import Header from './components/scaffold/header/header'
import * as lifecycle from './functions/lifecycle'
import screenSizeHandler from '../../shared/app/functions/screen/handlers/screen-size'
import popStateHandler from '../../shared/app/functions/routes/handlers/pop-state'
import { langHandler } from './functions/lang-handler'
import matchStateToRoute from './functions/routes/matchers/state-to-route'
import changeRoute from './functions/routes/changers/route'
import AppContext from './constants/context'
import CLIENT_URL from '../shared/constants/urls/client'
import API_URL from '../shared/constants/urls/api'
import * as langs from '../shared/constants/langs/langs'
import headerStyles from './components/scaffold/header_cust/styles/styles.scss'
import Logo from './components/scaffold/header_cust/components/logo/logo'
import { HeaderCustomization } from './components/scaffold/header_cust/components/customization/customization'
import { initSentry } from '../../shared/app/functions/analytics/sentry/init'
import { buildUrl } from '../shared/functions/builders/url'

import loadable from '@loadable/component'
const Image = loadable(() => import('../../shared/app/components/image/image'))

initSentry()

const APP_NAME = 'mapawynajmu-pl'

interface AppProps {
  renderPage: boolean
  renderListingIndexMap: boolean
}

class App extends React.Component<AppProps> {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.componentDidMount = lifecycle.componentDidMount
    // @ts-ignore
    this.componentDidUpdate = lifecycle.componentDidUpdate
    // @ts-ignore
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
    const {
      // @ts-ignore
      render,
      renderPage,
      // @ts-ignore
      renderImage,
      // @ts-ignore
      renderVisitor,
      // @ts-ignore
      renderAnnouncement,
      // @ts-ignore
      renderUser,
      // @ts-ignore
      lang,
      // @ts-ignore
      links,
      // @ts-ignore
      device,
      // @ts-ignore
      authorized,
      // @ts-ignore
      pageShowData,
      // @ts-ignore
      pageEditData,
      // @ts-ignore
      announcementEditData,
      // @ts-ignore
      dispatch,
      renderListingIndexMap,
    } = this.props
    // @ts-ignore
    const AppContextValue = {
      // @ts-ignore
      changeRoute: this.changeRoute,
      // @ts-ignore
      matchStateToRoute: this.matchStateToRoute,
      // @ts-ignore
      langHandler: this.langHandler,
    }
    // @ts-ignore
    const sharedProps = {
      appName: APP_NAME,
      langs,
      links,
      clientUrl: CLIENT_URL,
      apiUrl: API_URL,
      render,
      device,
      authorized,
      // @ts-ignore
      changeRoute: this.changeRoute,
      buildUrl,
      // @ts-ignore
      langHandler: this.langHandler,
      dispatch,
      lang,
    }
    const pageProps = { ...sharedProps }
    const urlComposites = { pageShowData, pageEditData, announcementEditData }
    const imageProps = sharedProps

    return (
      <React.StrictMode>
        <AppContext.Provider value={AppContextValue}>
          <Header {...{ ...sharedProps, urlComposites, lang, Logo, HeaderCustomization, styles: headerStyles }} />
          {renderAnnouncement && <Announcement />}
          {renderPage && <Page {...pageProps} />}
          {renderVisitor && <Visitor {...sharedProps} />}
          {renderUser && <User />}
          {renderImage && <Image {...imageProps} />}
          {!renderListingIndexMap && <Footer {...sharedProps} />}
        </AppContext.Provider>
      </React.StrictMode>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
