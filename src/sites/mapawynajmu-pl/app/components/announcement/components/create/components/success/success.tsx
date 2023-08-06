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
      grossRentAmount,
      netRentAmount,
      rentCurrency,
      area,
      path: href,
      // @ts-ignore
    } = this.props.announcement

    const isCommercial = [0, 1, 6, 7, 8].indexOf(category) !== -1
    const rentAmount = isCommercial ? netRentAmount : grossRentAmount

    const tileProps = {
      href: `/${href}`,
      id,
      title,
      name,
      pictures,
      disableSLides: false,
      category,
      locality,
      sublocality,
      lang,
      rentAmount,
      rentCurrency,
      area,
    }

    return (
      <div id='success-container'>
        <div className='further-steps'>
          <div className='congratulations'>{CONGRATULATIONS_TEXT['pl']}</div>
          <ListingIndexTile {...tileProps} />
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
