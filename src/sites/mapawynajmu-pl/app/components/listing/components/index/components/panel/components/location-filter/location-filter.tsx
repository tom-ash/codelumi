import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { GooglePlacesAutocomplete } from '../../../../../../../../../../shared/app/components/support/google-places-autocomplete/google-places-autocomplete'
import { getLocationByPlaceId } from '../../../../../../../../../../shared/app/functions/map/google/get-location-by-place-id'
import { GooglePlacesAutocompleteItem } from '../../../../../../../../../../shared/app/types/google-places-autocomplete'
import { useDispatch } from 'react-redux'

export const LocationFilter = () => {
  useStyles(styles)

  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setControl = (value: any) => dispatch({ type: 'control', value })

  const filterByLocation = async (location: GooglePlacesAutocompleteItem) => {
    const { place_id, description } = location
    const { lat, lng } = await getLocationByPlaceId(place_id)

    setInputs({ location: description, lat, lng })
    setControl({ rebuildQueryParams: true })
  }

  return (
    <GooglePlacesAutocomplete
      onItemClick={filterByLocation}
      onInputEnter={filterByLocation}
      country='pl'
    />
  )
}
