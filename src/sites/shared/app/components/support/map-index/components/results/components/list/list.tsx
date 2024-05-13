import React from 'react'
import { useDispatch } from 'react-redux'
import { useApp } from '../../../../../../../functions/store/use-app'
import { useData } from '../../../../../../../functions/store/use-data'
import { changeUrl } from '../../../../../../../functions/routes/changers/change-url'
import { Device } from '../../../../../../../../../skillfind-tech/app/types/device.enum'
import { Slider } from '../../../../../slider/slider'
import { ItemIndexInterface } from '../../../../types/item-index.interface'
import { Item } from '../../../../types/item.interface'
import { useMouseHovering } from '../../hooks/use-mouse-hovering'

const deviceConfig = {
  largePc: 'scroll',
  mediumPc: 'scroll',
  smallPc: 'scroll',
  largeTablet: 'slider',
  smallTablet: 'slider',
  largePhone: 'slider',
  smallPhone: 'slider',
}

const sliderDeviceConfig = {
  largePc: { perPage: 3, gap: 40 },
  mediumPc: { perPage: 3, gap: 40, padding: 50 },
  smallPc: { perPage: 2, gap: 40 },
  largeTablet: { perPage: 2, gap: 40, padding: 60, pagination: false },
  smallTablet: { perPage: 1, gap: 40, padding: 60, pagination: false },
  largePhone: { perPage: 1, gap: 20, padding: 60, pagination: false },
  smallPhone: { perPage: 1, gap: 20, padding: 60, pagination: false },
}

interface ListInterface {
  (props: { ListItem: ItemIndexInterface; renderShow: boolean; items: Item[] }): React.ReactElement
}

export const List: ListInterface = props => {
  const { ListItem, renderShow, items } = props

  const { lang, device, isMobile } = useApp()
  const listType = deviceConfig[device as Device]

  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })

  // TODO: REMOVE!
  const { currentPartnerName } = useData()

  const classNames = [listType]
  if (renderShow) {
    classNames.push('render-show')
  }

  const commonProps = {
    lang,
    changeUrl,
    isMobile,
    setControl,
  }

  useMouseHovering()

  return (
    <div
      id='list'
      className={classNames.join(' ')}
    >
      {currentPartnerName && <h2>{currentPartnerName}</h2>}
      {listType === 'scroll' && (
        <>
          {items.map((item: Item) => {
            // TODO: Use ul.
            return (
              <ListItem
                key={item.id}
                {...{
                  ...commonProps,
                  ...item,
                }}
              />
            )
          })}
        </>
      )}
      {listType === 'slider' && (
        <>
          <Slider
            slides={items}
            Slide={ListItem}
            deviceConfig={sliderDeviceConfig}
            commonProps={commonProps}
          />
        </>
      )}
    </div>
  )
}
