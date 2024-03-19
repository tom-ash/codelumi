import React, { useEffect } from 'react'
import { GoogleMap } from '../google-map/google-map'
import { GooglePlacesAutocomplete } from '../google-places-autocomplete/google-places-autocomplete'
import { useDispatch, useStore } from 'react-redux'
import { addPin } from './functions/add-pin'
import { drawPin } from './functions/draw-pin'
import { useInputs } from '../../../functions/store/use-inputs'
import { useApp } from '../../../functions/store/use-app'
import { useMouseMarking } from './hooks/use-mouse-marking'
import { useErrors } from '../../../functions/store/use-errors'
import { useControl } from '../../../functions/store/use-control'
import removePins from '../../../../../mapawynajmu-pl/app/components/listing/functions/map/pins/remove-pins'

export const MapMarker = () => {
  const dispatch = useDispatch()
  const setData = (value: any) => dispatch({ type: 'data', value })
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { isMapMarkerError: isError } = useErrors()
  const { longitude, latitude, category } = useInputs()
  const { isMapInitialized } = useApp()
  const { mapOptions } = useControl()
  const {
    // @ts-ignore
    assets: { svgs },
  } = useStore().getState()

  useEffect(() => {
    if (isMapInitialized && latitude && longitude) {
      drawPin({ latitude, longitude, svgs, category })
    } else if (isMapInitialized) {
      // @ts-ignore
      const pins = window.pins

      if (pins) {
        removePins(pins)
      }

      const map = window.googleMap
      map.setOptions(mapOptions)
    }
  }, [isMapInitialized, longitude, latitude, category])

  useMouseMarking({
    isMapInitialized,
    setInputs,
    setErrors,
    setData,
  })

  return (
    <div
      id='map-marker'
      className='section'
    >
      <GooglePlacesAutocomplete
        onItemClick={item =>
          addPin({
            geocodeBasis: { placeId: item.place_id },
            description: item.description,
            setInputs,
            setErrors,
            setData,
          })
        }
        onInputEnter={item =>
          addPin({
            geocodeBasis: { placeId: item.place_id },
            description: item.description,
            setInputs,
            setErrors,
            setData,
          })
        }
        isError={isError}
      />
      <GoogleMap />
    </div>
  )
}
