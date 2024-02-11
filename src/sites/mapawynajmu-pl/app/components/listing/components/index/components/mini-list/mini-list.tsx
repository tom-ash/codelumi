import React from 'react'
import { ListingIndexTile } from '../tile/tile'
import { ShowOnMapButton } from '../tile/show-on-map/show-on-map.button'
import { useDispatch } from 'react-redux'
import { useApp } from '../../../../../../../../shared/app/functions/store/use-app'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'

interface Picture {
  database: string
}

export interface ListingBase {
  id: number
  category: number
  href: string
  title: string
  name: string
  pictures: Picture[]
  latitude: number
  longitude: number
  locality: string
  sublocality?: string
  area?: number
  netRentAmount?: number
  grossRentAmount?: number
  rentCurrency?: number
  isPromoted: boolean
}

export const MiniList = () => {
  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const { lang, isMobile } = useApp()
  const { currentPartnerName, announcements: listings, title, } = useData()
  const changeHoveredTileId = (hoveredTileId: number | null) => setControl({ hoveredTileId })

  return (
    <div id='mini-list'>
      <h1>{title}</h1>
      {currentPartnerName && <h2>{currentPartnerName}</h2>}
      {listings.map((listing: ListingBase) => {
        const {
          id,
          category,
          href,
          title,
          name,
          pictures,
          latitude,
          longitude,
          locality,
          sublocality,
          area,
          netRentAmount,
          grossRentAmount,
          rentCurrency,
          isPromoted,
        } = listing

        const isCommercial = [0, 1, 6, 7, 8].indexOf(category) !== -1
        const rentAmount = isCommercial ? netRentAmount : grossRentAmount

        const onClick = (e: React.SyntheticEvent) => {
          e.preventDefault()

          changeUrl({ href, retainQueryParams: true, withScroll: false })
        }

        const tileProps = {
          key: href,
          id,
          category,
          href,
          title,
          name,
          pictures,
          latitude,
          longitude,
          locality,
          sublocality,
          area,
          rentAmount,
          rentCurrency,
          isPromoted,
          disableSlides: true,
          lang,
          onClick,
          onMouseOver: () => changeHoveredTileId(id),
          onMouseLeave: () => changeHoveredTileId(null),
        }

        return (
          <ListingIndexTile {...tileProps}>
            {isMobile && (
              <ShowOnMapButton
                latitude={latitude}
                longitude={longitude}
                setControl={setControl}
              />
            )}
          </ListingIndexTile>
        )
      })}
    </div>
  )
}
