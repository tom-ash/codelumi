import React from 'react'
import { ListingIndexTile } from '../tile/tile'
import { ShowOnMapButton } from '../tile/show-on-map/show-on-map.button'
import { useDispatch } from 'react-redux'
import { useApp } from '../../../../../../../../shared/app/functions/store/use-app'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'
import { ListingsIndexTile } from './listings-index-tile/listings-index-tile'

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

// const articlesSliderDeviceConfig = {
//   largePc: { perPage: 3, gap: 40, type: 'loop' },
//   mediumPc: { perPage: 3, gap: 40, type: 'loop', padding: 50 },
//   smallPc: { perPage: 2, gap: 40, type: 'loop', padding: 60 },
//   largeTablet: { perPage: 2, gap: 40, type: 'loop', padding: 60 },
//   smallTablet: { perPage: 1, gap: 40, type: 'loop', padding: 60 },
//   largePhone: { perPage: 1, gap: 20, type: 'loop', padding: 50 },
//   smallPhone: { perPage: 1, gap: 20, type: 'loop', padding: 50 },
// }

export const MiniList = () => {
  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const { lang, isMobile } = useApp()
  const { currentPartnerName, announcements: listings, title, } = useData()
  const changeHoveredTileId = (hoveredTileId: number | null) => setControl({ hoveredTileId })

  return (
    <div id='mini-list'>
      {/* <h1>{title}</h1> */}
      {currentPartnerName && <h2>{currentPartnerName}</h2>}
      {listings.map((listing: ListingBase) => {
        return (
          <ListingsIndexTile
            {...{
              ...listing,
              lang,
              changeUrl,
              changeHoveredTileId,
              isMobile,
              setControl,
            }}
          />
        )
      })}
    </div>
  )
}
