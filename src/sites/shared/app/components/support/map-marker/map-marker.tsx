import React, { useEffect } from 'react'
import { GoogleMap } from '../google-map/google-map'
import { GooglePlacesAutocomplete } from '../google-places-autocomplete/google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { addPin } from './functions/add-pin'
import { drawPin } from './functions/draw-pin'
import { useApp } from '../../../functions/store/use-app'
import { useMouseMarking } from './hooks/use-mouse-marking'
import { useErrors } from '../../../functions/store/use-errors'
import { useControl } from '../../../functions/store/use-control'
import removePins from '../../../../../mapawynajmu-pl/app/components/listing/functions/map/pins/remove-pins'
import { MapStyles } from '../map-index/map-index'
import { GooglePlacesAutocompleteCountry } from '../address-input/address-input'

interface MapMarkerInterface {
  (props: {
    item: {
      longitude: number
      latitude: number
      [key: string]: any
    }
    pinBuilder: PinBuilder
    mapStyles?: MapStyles
    lang?: Lang
    country?: GooglePlacesAutocompleteCountry
  }): React.ReactElement
}

export interface PinBuilder {
  (params: any): string
}

export const MapMarker: MapMarkerInterface = props => {
  const { item, pinBuilder, mapStyles, country, lang } = props
  const dispatch = useDispatch()
  const setData = (value: any) => dispatch({ type: 'data', value })
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { isLocationError: isError } = useErrors()
  const { isMapInitialized } = useApp()
  const { mapOptions } = useControl()

  useEffect(() => {
    if (isMapInitialized) {
      drawPin(item, pinBuilder)
    } else if (isMapInitialized) {
      // @ts-ignore
      const pins = window.pins

      if (pins) {
        removePins(pins)
      }

      const map = window.googleMap
      map.setOptions(mapOptions)
    }
  }, [isMapInitialized, item])

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
        country={country}
      />
      <GoogleMap
        lang={lang}
        mapStyles={mapStyles}
      />
    </div>
  )
}
