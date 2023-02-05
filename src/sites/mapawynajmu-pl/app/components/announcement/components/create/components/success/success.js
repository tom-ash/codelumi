import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { shareOnFacebookManager } from './functions/managers'
import AppContext from '../../../../../../constants/context'
import { langHandler } from '../../../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { Heading } from '../../../../../support/components/heading'
import { PAGE_HEADER, CONGRATULATIONS_TEXT, SHARE_ON_FACEBOOK_TEXT } from './constants/copies'
import { Line } from '../../../../../support/components/line/line'

class AnnouncementCreateSuccess extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.shareOnFacebookManager = shareOnFacebookManager.bind(this)
  }

  static contextType = AppContext

  render() {
    const { routeSynced } = this.props

    if (!routeSynced) return null

    return (
      <div id='success-container'>
        <Heading
          tier={1}
          text={this.langHandler(PAGE_HEADER)}
          svg='checkSquare'
        />
        <Line />
        <div className='further-steps'>
          <div className='congratulations'>{this.langHandler(CONGRATULATIONS_TEXT)}</div>
          <div className='share-on-facebook-text'>{this.langHandler(SHARE_ON_FACEBOOK_TEXT)}</div>
          <ManagedLink {...this.shareOnFacebookManager()} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AnnouncementCreateSuccess)
