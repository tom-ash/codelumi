import React from 'react'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { PromoteButton } from './components/promote'
import { ListingIndexTile } from '../../../index/components/tile/tile'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { buildUrl } from '../../../../../../../shared/functions/builders/url'
import { FacebookSharerButton } from '../../../../../../../../shared/app/components/support/facebook-sharer-button/facebook-sharer-button'

class AnnouncementCreateSuccess extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
  }

  render() {
    const {
      // @ts-ignore
      lang,
      // @ts-ignore
      isMobile,
      // @ts-ignore
      facebookSharerButtonLabel,
      // @ts-ignore
      congratulations,
      // @ts-ignore
      bumpingUpAndFacebookSharingBenefits,
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

    const url = buildUrl({ path: href })
    const facebookSharerButtonProps = {
      url,
      isMobile,
      facebookSharerButtonLabel,
    }

    return (
      <div id='success-container'>
        <div className='further-steps'>
          <div className='congratulations'>{congratulations}</div>
          <ListingIndexTile {...tileProps} />
          <div className='buttons'>
            <div className='share-on-facebook-text'>{bumpingUpAndFacebookSharingBenefits}</div>
            <PromoteButton listingId={id} />
            <FacebookSharerButton {...facebookSharerButtonProps} />
            <FloatClear />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AnnouncementCreateSuccess)
