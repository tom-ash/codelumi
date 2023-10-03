import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { SVG } from '../../../../../../../../../../shared/app/components/support/svg/svg'
import { AddressInput } from '../../../../../../../../../../shared/app/components/support/address-input/address-input'
import { useData } from '../../../../../../../../../../shared/app/functions/store/use-data'
import { useDispatch } from 'react-redux'
import { getLocationByPlaceId } from '../../../../../../../../../../shared/app/functions/map/google/get-location-by-place-id'
import { GooglePlacesAutocomplete } from '../../../../../../../../../../shared/app/types/google-places-autocomplete'

export const LocationFilter = () => {
  useStyles(styles)

  const data = useData()
  const autocompletes = data.autocompletes as GooglePlacesAutocomplete[]
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setControl = (value: any) => dispatch({ type: 'control', value })

  return (
    <div className='filter location'>
      <SVG name='marker' />
      <AddressInput />
      {autocompletes && autocompletes.length > 0 && <div className='autocompletes'>
        {autocompletes.map(autocomplete => {
          const {
            description,
            place_id,
          } = autocomplete

          return (
            <div
              onClick={async () => {
                const { lat, lng } = await getLocationByPlaceId(place_id)

                setInputs({ location: description, lat, lng })
                setControl({ rebuildQueryParams: true })
              }}
            >
              {description}
            </div>
          )
        })}
      </div>}
    </div>
  )
}
