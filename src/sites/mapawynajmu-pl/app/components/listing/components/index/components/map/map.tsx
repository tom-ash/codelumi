import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import ListingShowTile from '../../../show/components/tile/tile'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import GoBack from '../../../show/components/tile/components/go-back'
import { MiniList } from '../mini-list/mini-list'

class AnnouncementIndexMap extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
  }

  render() {
    const {
      // @ts-ignore
      tile,
      // @ts-ignore
      lang,
      // @ts-ignore
      isMobile,
      // @ts-ignore
      setApp,
      // @ts-ignore
      goBackLink,
    } = this.props

    return (
      <div id='listing-index-map'>
        <div id='google-map-container'>
          <MiniList />
          <div id='google-map' />
          {tile && Object.keys(tile).length > 1 && (
            <div id='listing-show'>
              <GoBack
                id={tile.id}
                goBackLink={goBackLink}
              />
              <ListingShowTile
                // @ts-ignore
                lang={lang}
                id={tile.id}
                category={tile.category}
                pictures={tile.pictures}
                area={tile.area}
                netRentAmount={tile.netRentAmount}
                netRentAmountPerSqm={tile.netRentAmountPerSqm}
                grossRentAmount={tile.grossRentAmount}
                grossRentAmountPerSqm={tile.grossRentAmountPerSqm}
                rooms={tile.rooms}
                rentCurrency={tile.rentCurrency}
                floor={tile.floor}
                totalFloors={tile.totalFloors}
                availabilityDate={tile.availabilityDate}
                isMobile={isMobile}
                setApp={setApp}
                href={tile.href}
                title={tile.title}
                locality={tile.locality}
                sublocality={tile.sublocality}
                // @ts-ignore
                description={{ pl: tile.polishDescription, en: tile.englishDescription }[lang]}
                name={tile.name}
                link={tile.link}
                phone={tile.phone}
                features={tile.features}
                furnishings={tile.furnishings}
                isPromoted={tile.isPromoted}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexMap))
