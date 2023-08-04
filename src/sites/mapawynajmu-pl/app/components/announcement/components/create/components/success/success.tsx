import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { shareOnFacebookManager } from './functions/managers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { CONGRATULATIONS_TEXT, SHARE_ON_FACEBOOK_TEXT } from './constants/copies'
import { PromoteButton } from './components/promote'
import { ListingIndexTile } from '../../../index/components/tile/tile'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'

class AnnouncementCreateSuccess extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.shareOnFacebookManager = shareOnFacebookManager.bind(this)
  }

  render() {
    const {
      // @ts-ignore
      lang,
    } = this.props
    const {
      id,
      title,
      pictures,
      name,
      category,
      locality,
      sublocality,
    // @ts-ignore
    } = this.props.announcement

    console.log(this.props)

    const picturesProps = {
      id,
      title,
      pictures,
      disableSLides: false,
      name,
      category,
      locality,
      sublocality,
      lang,
    }

    return (
      <div id='success-container'>
        <div className='further-steps'>
          <div className='congratulations'>{CONGRATULATIONS_TEXT['pl']}</div>
          <ListingIndexTile {...picturesProps} />
          <div className='buttons'>
            <div className='share-on-facebook-text'>{SHARE_ON_FACEBOOK_TEXT['pl']}</div>
            <PromoteButton />
            {/* @ts-ignore */}
            <ManagedLink {...this.shareOnFacebookManager()} />
            <FloatClear />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AnnouncementCreateSuccess)
