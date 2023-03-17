import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
const Header = loadable(() => import('./components/scaffold/header/header'))
import Visitor from '../../shared/app/components/visitor/visitor'
const User = loadable(() => import('./components/user/user'))
const Announcement = loadable(() => import('./components/announcement/announcement'))
import Page from '../../shared/app/components/page/page'
const Image = loadable(() => import('../../shared/app/components/image/image'))
import Footer from '../../shared/app/components/scaffold/footer/footer'

import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import styles from './styles/styles.scss'
import * as lifecycle from './functions/lifecycle'
import { langHandler } from '../../shared/app/functions/lang/handlers/lang'
import screenSizeHandler from '../../shared/app/functions/screen/handlers/screen-size'
import popStateHandler from '../../shared/app/functions/routes/handlers/pop-state'
import matchStateToRoute from './functions/routes/matchers/state-to-route'
import CLIENT_URL from '../shared/constants/urls/client'
import API_URL from '../shared/constants/urls/api'
import { LANGS } from '../shared/constants/langs/langs'
import { initSentry } from '../../shared/app/functions/analytics/sentry/init'
import { buildUrl } from '../shared/functions/routes/builders/url'

const PostingIndex = loadable(() => import('./components/announcement/components/index/index'))

initSentry()

const APP_NAME = 'skillfind-tech'

class App extends React.Component {
  screenSizeHandler: () => void
  langHandler: LangHandler
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
  }

  render() {
    // @ts-ignore
    const {
      // @ts-ignore
      render,
      // @ts-ignore
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
      renderPostingIndex,
      // @ts-ignore
      device,
      // @ts-ignore
      links,
      // @ts-ignore
      lang,
      // @ts-ignore
      pageShowData,
      // @ts-ignore
      pageEditData,
      // @ts-ignore
      setApp,
    } = this.props
    // @ts-ignore
    const urlComposites = { pageShowData, pageEditData }
    // @ts-ignore
    const sharedProps = {
      appName: APP_NAME,
      render,
      langs: LANGS,
      links,
      clientUrl: CLIENT_URL,
      apiUrl: API_URL,
      device,
      lang,
      buildUrl,
      setApp,
      langHandler: this.langHandler,
    }
    const pageProps = { ...sharedProps }
    const imageProps = sharedProps

    return (
      <>
        <Header />
        {renderPostingIndex && <PostingIndex />}
        {renderPage && <Page />}
        {renderVisitor && <Visitor {...sharedProps} />}
        {renderAnnouncement && <Announcement {...sharedProps} />}
        {renderUser && <User />}
        {renderImage && <Image {...imageProps} />}
        <Footer {...sharedProps} />
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
