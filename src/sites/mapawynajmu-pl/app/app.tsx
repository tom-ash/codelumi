import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import loadable from '@loadable/component'
const Header = loadable(() => import('./components/scaffold/header/header'))
const Visitor = loadable(() => import('./components/visitor/visitor'))
const User = loadable(() => import('./components/user/user'))
const Announcement = loadable(() => import('./components/announcement/announcement'))
const Page = loadable(() => import('../../shared/app/components/page/page'))
const Image = loadable(() => import('../../shared/app/components/image/image'))
const VisitorPageIndex = loadable(() => import('./components/visitor/components/page/components/index/index'))
const Footer = loadable(() => import('./components/scaffold/footer/footer'))
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'

import { initSentry } from '../../shared/app/functions/analytics/sentry/init'
initSentry()

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
  }

  render() {
    const {
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
      renderListingIndexMap,
      // @ts-ignore
      visitorPageIndex,
    } = this.props

    return (
      <>
        <Header />
        <div className='blank-page'>
          {renderAnnouncement && <Announcement />}
          {renderPage && <Page />}
          {renderVisitor && <Visitor />}
          {renderUser && <User />}
          {renderImage && <Image />}
          {visitorPageIndex && <VisitorPageIndex />}
        </div>
        {!renderListingIndexMap && <Footer />}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
