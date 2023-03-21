import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import loadable from '@loadable/component'
const Header = loadable(() => import('./components/scaffold/header/header'))
const Visitor = loadable(() => import('../../shared/app/components/visitor/visitor'))
const User = loadable(() => import('./components/user/user'))
const Announcement = loadable(() => import('./components/announcement/announcement'))
const Page = loadable(() => import('../../shared/app/components/page/page'))
const Image = loadable(() => import('../../shared/app/components/image/image'))
const VisitorPageIndex = loadable(() => import('./components/visitor/components/page/components/index/index'))
const Footer = loadable(() => import('../../shared/app/components/scaffold/footer/footer'))

import * as lifecycle from './functions/lifecycle'

import screenSizeHandler from '../../shared/app/functions/screen/handlers/screen-size'
import popStateHandler from '../../shared/app/functions/routes/handlers/pop-state'
import matchStateToRoute from './functions/routes/matchers/state-to-route'
import { initSentry } from '../../shared/app/functions/analytics/sentry/init'

// TODO: Remove!
import { langHandler } from './functions/lang-handler'
import CLIENT_URL from '../shared/constants/urls/client'
import API_URL from '../shared/constants/urls/api'
import * as langs from '../shared/constants/langs/langs'
import { buildUrl } from '../shared/functions/builders/url'
// TODO: Remove!

import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'

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
      // @ts-ignore
      visitorPageIndex,
    } = this.props

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
      buildUrl,
      // @ts-ignore
      langHandler: this.langHandler,
      dispatch,
      lang,
    }

    const urlComposites = { pageShowData, pageEditData, announcementEditData }
    const imageProps = sharedProps

    return (
      <>
        <Header />
        <div className='blank-page'>
          {renderAnnouncement && <Announcement />}
          {renderPage && <Page />}
          {renderVisitor && <Visitor {...sharedProps} />}
          {renderUser && <User />}
          {renderImage && <Image />}
          {visitorPageIndex && <VisitorPageIndex />}
        </div>
        {!renderListingIndexMap && <Footer {...sharedProps} />}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
