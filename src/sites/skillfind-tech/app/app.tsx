import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
const Header = loadable(() => import('./components/scaffold/header/header'))
const Visitor = loadable(() => import('./components/visitor/visitor'))
const User = loadable(() => import('./components/user/user'))
const Announcement = loadable(() => import('./components/announcement/announcement'))
const PostingIndex = loadable(() => import('./components/announcement/components/index/index'))
const Page = loadable(() => import('../../shared/app/components/page/page'))
const Image = loadable(() => import('../../shared/app/components/image/image'))
const Footer = loadable(() => import('./components/scaffold/footer/footer'))
import { initSentry } from '../../shared/app/functions/analytics/sentry/init'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'

initSentry()

class App extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
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
        {renderVisitor && <Visitor />}
        {renderAnnouncement && <Announcement />}
        {renderUser && <User />}
        {renderImage && <Image />}
        <Footer />
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
