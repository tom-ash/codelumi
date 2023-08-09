import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as managers from './functions/managers'
import { controlProvider } from './functions/control-provider'
import { buttonProvider } from './functions/button-provider'
import { triggerVisible } from './functions/trigger-visible'
import { extend } from './functions/extend'
import { destroy } from './functions/destroy'
import { edit } from './functions/edit'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { ManagedButton } from 'managed-inputs'
import { ListingIndexTile } from '../tile/tile'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'
import { PromoteButton } from '../../../create/components/success/components/promote'

class AnnouncementIndexMy extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.controlProvider = controlProvider.bind(this)
    // @ts-ignore
    this.buttonProvider = buttonProvider.bind(this)
    // @ts-ignore
    this.edit = edit.bind(this)
    // @ts-ignore
    this.triggerVisible = triggerVisible.bind(this)
    // @ts-ignore
    this.destroy = destroy.bind(this)
    // @ts-ignore
    this.destroyManager = managers.destroyManager.bind(this)
    // @ts-ignore
    this.cancelDestroyManager = managers.cancelDestroyManager.bind(this)
    // @ts-ignore
    this.extend = extend.bind(this)
  }

  render() {
    // @ts-ignore
    const { amount, offset, lang } = this.props

    const toValue = offset + 10 < amount ? offset + 10 : amount
    let whichAnnouncements = `${offset + 1} - ${toValue} ${{ pl: 'z', en: 'of' }['pl']}`
    if (offset + 1 === amount) whichAnnouncements = `${offset + 1} ${{ pl: 'z', en: 'of' }['pl']}`

    const tileComponents = {
      showPrimary: false,
    }

    return (
      <div id='listing-index-user'>
        <h1>
          <span>{{ pl: 'Moje ogłoszenia', en: 'My announcements' }['pl']}</span>
        </h1>
        {/* @ts-ignore */}
        {this.props.beingDeleted && (
          <div className='destroy'>
            <div className='cover' />
            <div className='monit'>
              <div className='text'>
                {
                  {
                    // @ts-ignore
                    pl: `Usunięte ogłoszenie nie może być przywrócone. Czy na pewno chcesz usunąć ogłoszenie Nr ${this.props.beingDeleted}. `,
                    // @ts-ignore
                    en: `The deleted announcement cannot be restored. Are you sure you want to delete the announcement No. ${this.props.beingDeleted}`,
                  }['pl']
                }
              </div>
              {/* @ts-ignore */}
              <ManagedButton {...this.cancelDestroyManager()} />
              {/* @ts-ignore */}
              <ManagedButton {...this.destroyManager()} />
              <div className='float-clear' />
            </div>
          </div>
        )}
        <div className='announcements'>
          {/* @ts-ignore */}
          {this.props.announcements.map((announcement, index) => {
            const {
              id,
              title,
              pictures,
              name,
              category,
              locality,
              sublocality,
              netRentAmount,
              grossRentAmount,
              rentCurrency,
              area,
              path: href,
            } = announcement

            const isCommercial = [0, 1, 6, 7, 8].indexOf(category) !== -1
            const rentAmount = isCommercial ? netRentAmount : grossRentAmount
            // @ts-ignore
            const onClick = (e) => {
              e.preventDefault()

              changeUrl({ href })
            }
            const tileProps = {
              key: title,
              href,
              id,
              title,
              pictures,
              disableSLides: true,
              name,
              category,
              locality,
              sublocality,
              lang,
              rentAmount,
              rentCurrency,
              area,
              onClick,
            }

            return (
              <div className='listing-index-tile-container'>
                <div className='listing-id'>
                  {id}
                </div>
                <ListingIndexTile {...tileProps} />
                <PromoteButton listingId={id} />
                {/* @ts-ignore */}
                {this.controlProvider(announcement, index)}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexMy))
