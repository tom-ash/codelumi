import React from 'react'
import { ListingIndexTile } from '../tile/tile'
import { ShowOnMapButton } from '../tile/show-on-map/show-on-map.button'
import { useDispatch } from 'react-redux'
import { useApp } from '../../../../../../../../shared/app/functions/store/use-app'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'
import { ListingsIndexTile } from './listings-index-tile/listings-index-tile'
import { Device } from '../../../../../../../../skillfind-tech/app/types/device.enum'
import { Slider } from '../../../../../../../../shared/app/components/support/slider/slider'

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

const listingsDeviceConfig = {
  largePc: 'scroll',
  mediumPc: 'scroll',
  smallPc: 'scroll',
  largeTablet: 'slider',
  smallTablet: 'slider',
  largePhone: 'slider',
  smallPhone: 'slider',
}

const listingsSliderDeviceConfig = {
  largePc: { perPage: 3, gap: 40 },
  mediumPc: { perPage: 3, gap: 40, padding: 50 },
  smallPc: { perPage: 2, gap: 40 },
  largeTablet: { perPage: 2, gap: 40, padding: 60, pagination: false },
  smallTablet: { perPage: 1, gap: 40, padding: 60, pagination: false },
  largePhone: { perPage: 1, gap: 20, padding: 60, pagination: false },
  smallPhone: { perPage: 1, gap: 20, padding: 60, pagination: false },
}

export const MiniList = () => {
  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const { lang, device, isMobile } = useApp()
  const { currentPartnerName, announcements: listings, title, } = useData()
  const changeHoveredTileId = (hoveredTileId: number | null) => setControl({ hoveredTileId })
  const listType = listingsDeviceConfig[device as Device]

  const commonProps = {
    lang,
    changeUrl,
    changeHoveredTileId,
    isMobile,
    setControl,
  }

  return (
    <div id='mini-list' className={listType}>
      {/* <h1>{title}</h1> */}
      {currentPartnerName && <h2>{currentPartnerName}</h2>}
      {listType === 'scroll' && (
        <>
          {listings.map((listing: ListingBase) => {
            return (
              <ListingsIndexTile
                {...{
                  ...commonProps,
                  ...listing,
                }}
              />
            )
          })}
        </>
      )}
      {listType === 'slider' && (
        <>
          <Slider
            slides={listings}
            Slide={ListingsIndexTile}
            deviceConfig={listingsSliderDeviceConfig}
            commonProps={commonProps}
          />
        </>
      )}
    </div>
  )
}
