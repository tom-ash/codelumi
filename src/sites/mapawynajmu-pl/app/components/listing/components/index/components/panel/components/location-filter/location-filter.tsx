import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { SVG } from '../../../../../../../../../../shared/app/components/support/svg/svg'
import { AddressInput } from '../../../../../../../../../../shared/app/components/support/address-input/address-input'
import { useData } from '../../../../../../../../../../shared/app/functions/store/use-data'
import { useDispatch } from 'react-redux'

export const LocationFilter = () => {
  useStyles(styles)

  const { autocompletes } = useData()

  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setControl = (value: any) => dispatch({ type: 'control', value })

  return (
    <div className='filter location'>
      <SVG name='marker' />
      <AddressInput />
      {autocompletes && autocompletes.length > 0 && <div className='autocompletes'>
        {/* @ts-ignore */}
        {autocompletes.map(autocomplete => {
          const {
            description,
            place_id,
          } = autocomplete

          return (
            <div
              onClick={() => {
                var geocoder = new google.maps.Geocoder();
              
                geocoder.geocode({
                  'placeId': place_id
                }, function(results, status) {
              
                  if (status == google.maps.GeocoderStatus.OK) {
                    const location = results[0].geometry.location
                    const lat = location.lat();
                    const lng = location.lng();

                    setInputs({ location: description, lat, lng })
                    setControl({ rebuildQueryParams: true })
                  }
                });
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
