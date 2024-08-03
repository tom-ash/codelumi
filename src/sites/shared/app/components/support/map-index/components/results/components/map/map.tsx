import React, { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { GoogleMap } from '../../../../../google-map/google-map'
import { useApp } from '../../../../../../../functions/store/use-app'
import { useControl } from '../../../../../../../functions/store/use-control'
import { drawPins } from '../../../../../../../../../mapawynajmu-pl/app/components/listing/functions/map/pins/draw-pins'
import { useData } from '../../../../../../../functions/store/use-data'
import { Item } from '../../../../types/item.interface'
import { PinBuilder } from '../../../../types/pin-builder.interface'
import { MapStyles } from '../../../../map-index'

interface MapInterface {
  (props: { items: Item[]; pinBuilder: PinBuilder; lang?: Lang, mapStyles?: MapStyles }): React.ReactElement
}

export const Map: MapInterface = props => {
  const { items, pinBuilder, lang, mapStyles } = props

  const { isMapInitialized } = useApp()
  const { mapOptions, isPinsDrawn } = useControl()
  const { currentListingId } = useData()
  const {
    // @ts-ignore
    assets: { svgs },
  } = useStore().getState()

  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })

  useEffect(() => {
    if (isMapInitialized && !isPinsDrawn) {
      drawPins({
        items,
        currentListingId,
        svgs,
        pinBuilder,
      })

      setTimeout(() => {
        setControl({ isPinsDrawn: true })
      }, 0)
    }
  }, [isMapInitialized, isPinsDrawn])

  useEffect(() => {
    if (isMapInitialized && mapOptions) {
      const map = window.googleMap
      map.setOptions(mapOptions)
    }
  }, [isMapInitialized, mapOptions])

  return <GoogleMap lang={lang} mapStyles={mapStyles} />
}
