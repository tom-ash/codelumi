import React from 'react'
import { useDispatch } from 'react-redux'
import { useApp } from '../../../../../../../functions/store/use-app'
import { useData } from '../../../../../../../functions/store/use-data'
import { changeUrl } from '../../../../../../../functions/routes/changers/change-url'
import { Device } from '../../../../../../../../../skillfind-tech/app/types/device.enum'
import { Slider } from '../../../../../slider/slider'

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

interface ListInterface {
  (props: {
    ListItem(props: any): React.ReactElement
  }): React.ReactElement
}

export const List: ListInterface = (props) => {
  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const { lang, device, isMobile } = useApp()
  const { currentPartnerName, announcements: listings, title, } = useData()
  const changeHoveredTileId = (hoveredTileId: number | null) => setControl({ hoveredTileId })

  const changeUnhoveredTileId = (unhoveredTileId: number | null) => setControl({ unhoveredTileId })

  const listType = listingsDeviceConfig[device as Device]
  const { ListItem } = props

  const commonProps = {
    lang,
    changeUrl,
    changeHoveredTileId,
    changeUnhoveredTileId,
    isMobile,
    setControl,
  }

  return (
    <div id='mini-list' className={listType}>
      {currentPartnerName && <h2>{currentPartnerName}</h2>}
      {listType === 'scroll' && (
        <>
          {listings.map((listing: ListingBase) => {
            // TODO: Use ul.
            return (
              <ListItem
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
            Slide={ListItem}
            deviceConfig={listingsSliderDeviceConfig}
            commonProps={commonProps}
          />
        </>
      )}
    </div>
  )
}
