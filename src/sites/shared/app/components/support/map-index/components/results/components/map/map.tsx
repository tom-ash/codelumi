import React, { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { GoogleMap } from '../../../../../google-map/google-map'
import { useApp } from '../../../../../../../functions/store/use-app'
import { useControl } from '../../../../../../../functions/store/use-control'
import drawPins from '../../../../../../../../../mapawynajmu-pl/app/components/listing/functions/map/pins/draw-pins'
import { useData } from '../../../../../../../functions/store/use-data'

interface MapInterface {
  (): React.ReactElement
}

export const Map: MapInterface = () => {
  const dispatch = useDispatch()
  const {
    isMobile,
    isMapInitialized,
  } = useApp()

  const {
    mapOptions,
    isPinsDrawn,
    hoveredTileId,
    unhoveredTileId,
  } = useControl()

  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setData = (value: any) => dispatch({ type: 'data', value })
  const {
    announcements,
    currentListingId,
  } = useData()
  const {
    // @ts-ignore
    assets: { svgs }
  } = useStore().getState()

  useEffect(() => {
    if (isMapInitialized && !isPinsDrawn) {
      drawPins({
        isMobile,
        listings: announcements,
        currentListingId,
        svgs,
        setData,
        setControl,
      })

      setTimeout(() => {
        setControl({ isPinsDrawn: true })
      }, 0)
    }
  }, [isMapInitialized, isPinsDrawn])

  useEffect(() => {
    setControl({ unhoveredTileId: null })

    const pin = document.getElementById(`google-map-pin-${hoveredTileId}`)
    if (pin) pin.classList.add('hovered')
  }, [hoveredTileId])

  useEffect(() => {
    setControl({ hoveredTileId: null })

    const pin = document.getElementById(`google-map-pin-${unhoveredTileId}`)
    if (pin) pin.classList.remove('hovered')
  }, [unhoveredTileId])

  useEffect(() => {
    if (isMapInitialized && mapOptions) {
      const map = window.googleMap
      map.setOptions(mapOptions)
    }
  }, [isMapInitialized, mapOptions])

  return (
    <GoogleMap />
  )
}
