import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
const Header = loadable(() => import('./components/scaffold/header/header'))

const User = loadable(() => import('./components/user/user'))
const Announcement = loadable(() => import('./components/announcement/announcement'))
const Page = loadable(() => import('../../shared/app/components/page/page'))
const Image = loadable(() => import('../../shared/app/components/image/image'))
const Footer = loadable(() => import('../../shared/app/components/scaffold/footer/footer'))

import styles from './styles/styles.scss'
import * as lifecycle from './functions/lifecycle'

import screenSizeHandler from '../../shared/app/functions/screen/handlers/screen-size'

import { initSentry } from '../../shared/app/functions/analytics/sentry/init'

const PostingIndex = loadable(() => import('./components/announcement/components/index/index'))

initSentry()

const APP_NAME = 'skillfind-tech'

class App extends React.Component {
  screenSizeHandler: () => void

  // @ts-ignore
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.screenSizeHandler = screenSizeHandler.bind(this)
  }

  render() {
    const {
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
    } = this.props

    return (
      <>
        <Header />
        {renderPostingIndex && <PostingIndex />}
        {renderPage && <Page />}
        {/* {renderVisitor && <Visitor {...sharedProps} />} */}
        {renderAnnouncement && <Announcement />}
        {renderUser && <User />}
        {renderImage && <Image />}
        {/* <Footer {...sharedProps} /> */}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
