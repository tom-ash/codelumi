import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Header from './components/scaffold/components/header/header'
import Visitor from './components/visitor/visitor'
import Announcement from './components/announcement/announcement'
import Post from './components/post/post'
import User from './components/user/user'
import Footer from './components/scaffold/components/footer/Footer'
import * as lifecycle from './functions/lifecycle'
import * as routers from './functions/routers/change-path'
import { authorizeUserWithTokens } from './components/user/components/authorize/components/tokens/functions/adapters.js'
import { screenSizeHandler } from './functions/screen-size-handler'
import { popStateHandler } from './functions/popStateHandler'
import { languageObjectHandler } from './functions/language-handler'
import { matchStateToPath } from './functions/routers/match-state-to-path'
import { matchPathToState } from './functions/routers/match-path-to-state'
import NotFound from './components/scaffold/components/not-found/not-found'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import SiteMap from './components/scaffold/components/site-map/site-map'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.authorizeUserWithTokens = authorizeUserWithTokens.bind(this)
    this.screenSizeHandler = screenSizeHandler.bind(this)
    this.popStateHandler = popStateHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.changePath = routers.changePath.bind(this)
    this.matchStateToPath = matchStateToPath.bind(this)
    this.matchPathToState = matchPathToState.bind(this)
  }

  render() {
    const {
      language,
      TODO,
      
    } = this.props

    if (TODO) {
      return (
        <div id='app-container'>
          <Header />
          <NotFound language={language}/>
          <Footer />
        </div>
      )
    }

    return (
      <div id='app-container'>
        <Header />
        <div id='app-inner-container'>
          {TODO && <User />}
          <Announcement />
          <Post />
          <Visitor />
          {TODO && <SiteMap />}
        </div>
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
