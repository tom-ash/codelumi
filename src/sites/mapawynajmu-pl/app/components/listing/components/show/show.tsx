import React from 'react'
import GoBack from './components/tile/components/go-back'
import ListingShowTile from './components/tile/tile'
import { useData } from '../../../../../../shared/app/functions/store/use-data'
import { useApp } from '../../../../../../shared/app/functions/store/use-app'
import { useLinks } from '../../../../../../shared/app/functions/store/use-links'

const ListingsShow = () => {
  const { lang, isMobile } = useApp()
  const { tile } = useData()
  const { 'listing/index/go-back': goBackLink } = useLinks()

  return (
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
  )
}

export default ListingsShow
