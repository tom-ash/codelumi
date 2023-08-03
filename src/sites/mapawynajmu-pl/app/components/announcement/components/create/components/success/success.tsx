import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { shareOnFacebookManager } from './functions/managers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { Heading } from '../../../../../support/components/heading'
import { PAGE_HEADER, CONGRATULATIONS_TEXT, SHARE_ON_FACEBOOK_TEXT } from './constants/copies'
import { Line } from '../../../../../support/components/line/line'
import { PromoteButton } from './components/promote'

class AnnouncementCreateSuccess extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.shareOnFacebookManager = shareOnFacebookManager.bind(this)
  }

  render() {
    return (
      <div id='success-container'>
        <Heading
          tier={1}
          text={PAGE_HEADER['pl']}
          // @ts-ignore
          svg='checkSquare'
        />
        <Line />
        <div className='further-steps'>
          <div className='congratulations'>{CONGRATULATIONS_TEXT['pl']}</div>
          <div className='share-on-facebook-text'>{SHARE_ON_FACEBOOK_TEXT['pl']}</div>
          <PromoteButton />
          {/* @ts-ignore */}
          <ManagedLink {...this.shareOnFacebookManager()} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AnnouncementCreateSuccess)
