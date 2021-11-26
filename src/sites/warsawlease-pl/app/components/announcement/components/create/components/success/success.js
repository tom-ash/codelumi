import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { shareOnFacebookManager, goToAnnouncementManager } from './functions/managers'
import SVG from '../../../../../support/components/svg/svg'
import AppContext from '../../../../../../constants/context.js'
import langHandler from '../../../../../../functions/lang-handler.js'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import Header from '../../../../../support/components/header/header.js'
import { PAGE_HEADER, CONGRATULATIONS_TEXT, SHARE_ON_FACEBOOK_TEXT } from './constants/copies.js'

class AnnouncementCreateSuccess extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.shareOnFacebookManager = shareOnFacebookManager.bind(this)
    this.goToAnnouncementManager = goToAnnouncementManager.bind(this)
  }

  static contextType = AppContext

  render() {
    const { routeSynced } = this.props

    if (!routeSynced) return null

    return (
      <div id='success'>
        <Header tier={1} text={this.langHandler(PAGE_HEADER)} svg='checkSquare' />
        <div className='congratulations'>
          {this.langHandler(CONGRATULATIONS_TEXT)}
        </div>
        <div className='share-on-facebook-text'>
          {this.langHandler(SHARE_ON_FACEBOOK_TEXT)}
        </div>
        <ManagedLink {...this.shareOnFacebookManager()} />
      </div>
    )
  }
}

export default (withStyles(styles)(AnnouncementCreateSuccess))
