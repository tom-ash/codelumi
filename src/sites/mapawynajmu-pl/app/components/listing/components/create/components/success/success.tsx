import React from 'react'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { PromoteButton } from './components/promote'
import { FacebookSharerButton } from '../../../../../../../../shared/app/components/support/facebook-sharer-button/facebook-sharer-button'
import { PromotionBenefits } from '../../../common/promotion-benefits/promotion-benefits'
import { Image } from '../../../../../../../../shared/app/components/support/image/image'
import { TrackedLink } from '../../../../../../../../shared/app/components/support/tracked-link/tracked-link'

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
      shareOnFacebookButtonLabel,
      // @ts-ignore
      congratulations,
    } = this.props
    const {
      id,
      href,
      isPromoted,
      // @ts-ignore
    } = this.props.announcement

    // console.log( this.props)
    const {
      image
      // @ts-ignore
    } = this.props.announcement

    const facebookSharerButtonProps = {
      href,
      isMobile,
      shareOnFacebookButtonLabel,
    }
    const className = isPromoted ? 'promoted' : undefined

    return (
      <div
        id='success-container'
        className={className}
      >
        <div className='further-steps'>
          <div className='congratulations'>{congratulations}</div>
          <TrackedLink
            track='announcement/show'
          >
            <Image
              src={image}
              alt='todo'
              className='social-image'
            />
          </TrackedLink>
          <div className='promotion-actions'>
            {!isPromoted && (
              <div className='promote'>
                <PromoteButton listingId={id} />
                <PromotionBenefits />
              </div>
            )}
            <div className='share-on-facebook'>
              <FacebookSharerButton {...facebookSharerButtonProps} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AnnouncementCreateSuccess)
